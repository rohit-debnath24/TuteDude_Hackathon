import React, { useState, useRef, useEffect } from "react";

const GOOGLE_MAPS_API_KEY = "AIzaSyDrijDP-JDrxRY005f3fjRcXL87yM-9z3U";

const VendorRegister = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    password: "",
    lat: "",
    lng: "",
    address: "",
  });
  const [mapLoaded, setMapLoaded] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState("");
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const geocoderRef = useRef(null);
  const infoWindowRef = useRef(null);

  useEffect(() => {
    if (!window.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&callback=initMap`;
      script.async = true;
      window.initMap = initMap;
      document.body.appendChild(script);
    } else {
      initMap();
    }
    // eslint-disable-next-line
  }, []);

  function initMap() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLatLng = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        const map = new window.google.maps.Map(mapRef.current, {
          zoom: 15,
          center: userLatLng,
        });
        geocoderRef.current = new window.google.maps.Geocoder();
        infoWindowRef.current = new window.google.maps.InfoWindow();
        markerRef.current = new window.google.maps.Marker({
          map: map,
          position: userLatLng,
          draggable: true,
        });

        markerRef.current.addListener("dragend", () => {
          const pos = markerRef.current.getPosition();
          updateFields({ lat: pos.lat(), lng: pos.lng() });
        });

        map.addListener("click", (e) => {
          markerRef.current.setPosition(e.latLng);
          updateFields({ lat: e.latLng.lat(), lng: e.latLng.lng() });
        });

        updateFields(userLatLng);
        setMapLoaded(true);
      },
      (error) => {
        alert("Geolocation failed.");
        console.error(error);
      }
    );
  }

  function updateFields(latlng) {
    setForm((prev) => ({
      ...prev,
      lat: latlng.lat,
      lng: latlng.lng,
    }));
    if (!geocoderRef.current || !infoWindowRef.current) return;
    geocoderRef.current.geocode(
      { location: { lat: latlng.lat, lng: latlng.lng } },
      (results, status) => {
        if (status === "OK" && results[0]) {
          const address = results[0].formatted_address;
          setForm((prev) => ({ ...prev, address }));
          infoWindowRef.current.setContent(address);
          infoWindowRef.current.open(
            markerRef.current.getMap(),
            markerRef.current
          );
        } else {
          setForm((prev) => ({ ...prev, address: "" }));
        }
      }
    );
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.phone.trim()) errs.phone = "Phone is required";
    else if (!/^\d{10}$/.test(form.phone.trim())) errs.phone = "Phone must be 10 digits";
    if (!form.password) errs.password = "Password is required";
    else if (form.password.length < 6) errs.password = "Password must be at least 6 characters";
    if (!form.lat || !form.lng) errs.location = "Location is required (select on map)";
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setSuccess("");
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/vendor/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const text = await res.text();
      setSuccess("Registration successful! Redirecting to home...");
      // Mark as registered in localStorage and dispatch event
      localStorage.setItem('isSupplierRegistered', 'true');
      // Save supplier details for profile page
      localStorage.setItem('supplierProfile', JSON.stringify({
        name: form.name,
        phone: form.phone,
        address: form.address,
        lat: form.lat,
        lng: form.lng
      }));
      window.dispatchEvent(new Event('supplier-registered'));
      setTimeout(() => {
        window.location.hash = '';
      }, 1500);
    } catch (err) {
      setErrors({ submit: "Registration failed. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{
      fontFamily: "Arial, sans-serif",
      padding: 20,
      background: "#f4f4f4",
      textAlign: "center",
      minHeight: "100vh"
    }}>
      <h1>Vendor Registration</h1>
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        style={{
          background: "white",
          padding: 20,
          display: "inline-block",
          borderRadius: 8,
          boxShadow: "0 0 10px rgba(0,0,0,0.2)",
          minWidth: 320,
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          style={{ borderColor: errors.name ? 'red' : undefined }}
        />
        {errors.name && <div style={{ color: 'red', fontSize: 13 }}>{errors.name}</div>}
        <br />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          autoComplete="tel-random"
          style={{ borderColor: errors.phone ? 'red' : undefined }}
        />
        {errors.phone && <div style={{ color: 'red', fontSize: 13 }}>{errors.phone}</div>}
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          autoComplete="new-password"
          style={{ borderColor: errors.password ? 'red' : undefined }}
        />
        {errors.password && <div style={{ color: 'red', fontSize: 13 }}>{errors.password}</div>}
        <br />
        {/* Hidden Inputs for Coordinates and Address */}
        <input type="text" name="lat" value={form.lat} readOnly style={{ marginBottom: 2 }} />
        <input type="text" name="lng" value={form.lng} readOnly style={{ marginBottom: 2 }} />
        <input type="text" name="address" value={form.address} readOnly style={{ marginBottom: 2 }} />
        {errors.location && <div style={{ color: 'red', fontSize: 13 }}>{errors.location}</div>}
        <div
          id="map"
          ref={mapRef}
          style={{
            height: 300,
            width: "100%",
            maxWidth: 600,
            margin: "20px auto",
          }}
        ></div>
        <button type="submit" disabled={!mapLoaded || submitting}>
          {submitting ? 'Registering...' : 'Register'}
        </button>
        {errors.submit && <div style={{ color: 'red', marginTop: 8 }}>{errors.submit}</div>}
        {success && <div style={{ color: 'green', marginTop: 8 }}>{success}</div>}
      </form>
    </div>
  );
};

export default VendorRegister;

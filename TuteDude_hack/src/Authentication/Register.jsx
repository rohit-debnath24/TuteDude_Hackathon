import React, { useState, useRef, useEffect } from 'react';

const Register = () => {
  const [form, setForm] = useState({ name: '', phone: '', password: '', address: '', lat: '', lng: '' });
  const [mapLoaded, setMapLoaded] = useState(false);
    const [location, setLocation] = useState({ lat: 28.6139, lng: 77.209 }); // Default to Delhi
    const [locationLoading, setLocationLoading] = useState(true);
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  // Load Google Maps script and initialize map only after location is loaded
  useEffect(() => {
    if (locationLoading) return;
    if (mapLoaded) return;
    function initialize() {
      if (window.google && window.google.maps && mapRef.current) {
        initMap(location);
      }
    }
    if (window.google && window.google.maps) {
      initialize();
    } else {
      const existingScript = document.querySelector('script[src^="https://maps.googleapis.com/maps/api/js"]');
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDrijDP-JDrxRY005f3fjRcXL87yM-9z3U&callback=initMap&v=weekly`;
        script.async = true;
        script.onload = initialize;
        document.body.appendChild(script);
      } else {
        existingScript.onload = initialize;
      }
    }
    // eslint-disable-next-line
  }, [locationLoading, location, mapLoaded]);

  // When location changes and map is already loaded, recenter map and marker
  useEffect(() => {
    if (mapLoaded && window.google && window.google.maps && mapRef.current && markerRef.current) {
      const map = markerRef.current.getMap();
      map.setCenter(location);
      markerRef.current.setPosition(location);
      setForm(f => ({ ...f, lat: location.lat, lng: location.lng }));
      getAddress(location.lat, location.lng);
    }
    // eslint-disable-next-line
  }, [location, mapLoaded]);
    
  // Get user's real-time location, prompt for permission, and handle denial
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setLocationLoading(false);
        },
        (error) => {
          setLocationLoading(false);
          if (error.code === error.PERMISSION_DENIED) {
            alert('Location access was denied. You can still pick your location manually on the map.');
          } else {
            alert('Unable to fetch your location. You can still pick your location manually on the map.');
          }
        }
      );
    } else {
      setLocationLoading(false);
      alert('Geolocation is not supported by your browser. You can still pick your location manually on the map.');
    }
  }, []);

  // Initialize map centered at provided location
  const initMap = (centerLatLng) => {
    if (mapLoaded) return; // Prevent double init
    setMapLoaded(true);
    const map = new window.google.maps.Map(mapRef.current, {
      center: centerLatLng,
      zoom: 12,
    });
    let marker = new window.google.maps.Marker({
      position: centerLatLng,
      map,
      draggable: true,
    });
    markerRef.current = marker;
    setForm(f => ({ ...f, lat: centerLatLng.lat, lng: centerLatLng.lng }));
    map.addListener('click', (e) => {
      marker.setPosition(e.latLng);
      setForm(f => ({ ...f, lat: e.latLng.lat(), lng: e.latLng.lng() }));
      getAddress(e.latLng.lat(), e.latLng.lng());
    });
    marker.addListener('dragend', (e) => {
      setForm(f => ({ ...f, lat: e.latLng.lat(), lng: e.latLng.lng() }));
      getAddress(e.latLng.lat(), e.latLng.lng());
    });
  };

  const getAddress = (lat, lng) => {
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ location: { lat, lng } }, (results, status) => {
      if (status === 'OK' && results[0]) {
        setForm(f => ({ ...f, address: results[0].formatted_address }));
      }
    });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Save registration info to localStorage or send to backend
    localStorage.setItem('supplierProfile', JSON.stringify(form));
    localStorage.setItem('isSupplierRegistered', 'true');
    window.dispatchEvent(new Event('supplier-registered'));
    window.location.hash = '#/profile';
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Supplier Registration</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            className="border rounded px-3 py-2"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            className="border rounded px-3 py-2"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
          />
          <input
            className="border rounded px-3 py-2"
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <input
            className="border rounded px-3 py-2 bg-gray-100"
            name="address"
            placeholder="Address (auto-filled)"
            value={form.address}
            readOnly
          />
          {locationLoading ? (
            <div>Fetching your location...<br/>Please allow location access in your browser when prompted.</div>
          ) : (
            <div className="w-full h-64 rounded-lg border mt-2" ref={mapRef}></div>
          )}
          <button type="submit" className="bg-purple-600 text-white rounded px-4 py-2 font-medium hover:bg-purple-700 mt-4">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;

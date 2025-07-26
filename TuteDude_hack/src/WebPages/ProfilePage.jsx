import React from 'react';

const ProfilePage = () => {
  return (
    <>
      {/* Space for Navbar */}
      <div className="grid grid-cols-12">
        <div className="col-span-10 col-start-2 border rounded-lg mt-20 bg-white">
          <div className="flex items-center space-x-8 p-8">
            <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center text-3xl font-bold">
              {/* Profile Pic Placeholder */}
              U
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">User Name</h2>
              <p className="text-gray-600 mb-1">user@email.com</p>
              <p className="text-gray-600">+91-XXXXXXXXXX</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-5 col-start-2 border rounded-lg mt-20 bg-white p-6">
          <h3 className="text-xl font-semibold mb-4">My Orders</h3>
          <div className="h-32 flex items-center justify-center text-gray-500">You have no recent orders.</div>
        </div>
        <div className="col-span-5 border rounded-lg mt-20 bg-white p-6">
          <h3 className="text-xl font-semibold mb-4">Saved Addresses</h3>
          <div className="h-32 flex items-center justify-center text-gray-500">No addresses saved yet.</div>
        </div>
      </div>

      <div className="ml-35 mt-10 text-lg font-semibold">Account Settings</div>
      <div className="w-3/4 h-20 ml-10 border rounded-lg mt-4 bg-white flex items-center p-4">
        <p className="text-gray-500">Edit Profile | Change Password | Logout</p>
      </div>
      {/* Space for Footer */}
    </>
  );
};

export default ProfilePage;
//hi i am rito
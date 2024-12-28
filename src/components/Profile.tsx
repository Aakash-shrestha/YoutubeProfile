import { useState } from "react";
import { FaCamera } from "react-icons/fa";

const Profile = () => {
  const [bannerUrl, setBannerUrl] = useState("https://placehold.co/1500x400");
  const [profileUrl, setProfileUrl] = useState("https://placehold.co/100");

  const handleBannerChange = (event: any) => {
    const file = event.target.files[0]; // Get the first file from the input
    if (file) {
      setBannerUrl(URL.createObjectURL(file)); // Convert the file to a temporary URL
    }
  };

  const handleProfileChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setProfileUrl(URL.createObjectURL(file));
    }
  };
  return (
    <div className="relative w-[94%] ml-[5rem]">
      <div className="relative">
        <img
          src={bannerUrl}
          alt="Background Image"
          className="w-full h-60 object-cover"
        />

        <button className="absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
          <label htmlFor="banner-upload" className="cursor-pointer">
            <FaCamera size={24} />
          </label>

          <input
            type="file"
            id="banner-upload"
            accept="image/*"
            className="hidden"
            onChange={handleBannerChange}
          />
        </button>
      </div>

      {/* Profile Image */}
      <div className="flex items-center ml-4 mt-[2rem]">
        <img
          src={profileUrl}
          alt="Profile Image"
          className="w-40 h-40 object-cover rounded-full border-white relative"
        />

        <button className="absolute ml-[3.6rem] mt-[9rem] z-10 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
          <label htmlFor="profile-upload" className="cursor-pointer">
            <FaCamera size={24} />
          </label>
          <input
            type="file"
            id="profile-upload"
            accept="image/*"
            className="hidden"
            onChange={handleProfileChange}
          />
        </button>

        {/* Channel Details */}
        <div className="ml-4 mt-4">
          <h1 className="text-2xl font-bold">Aakash Shrestha</h1>
          <p>1M Views</p>
          <p className="mt-2">
            This is a short description of the YouTube channel. It gives an
            overview of the content and what viewers can expect.
          </p>
          <button className="mt-4 bg-red-600 py-2 px-4 rounded hover:bg-red-500 text-white">
            Subsribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;

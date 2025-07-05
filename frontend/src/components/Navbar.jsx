import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const [userId, setuserId] = useState(0);

  const dummyData = [
    {
      id: 0,
      name: "John Doe",
      email: "john.doe@example.com",
      password: "password123",
      wallet: "0xAb",
    },
    {
      id: 1,
      name: "Sunnt Doe",
      email: "sunny.doe@example.com",
      password: "password456",
      wallet: "1234",
    },
  ];

  return (
    
    <div className="p-4 flex items-center justify-between rounded-xl">
      <div className="flex items-center space-x-3">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUoCsJA8tYf_P9Cp4j2jG7gdWDNMe11yCQeQ&s"
          alt="EcoMint Logo"
          className="w-full h-10"
        />

      </div>

      <div className="flex items-center space-x-4">
        <h2 className="text-sm text-gray-700 font-medium bg-slate-100 p-3 rounded-xl">
          Wallet : {dummyData[userId].wallet}
        </h2>
        <button onClick={() => navigate("/")} className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition"> Connect </button>
      </div>
    </div>
  );
};

export default Navbar;
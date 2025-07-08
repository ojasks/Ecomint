import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [userId, setuserId] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div className="p-4 flex items-center justify-between rounded-xl">
      {/* Left Logo */}
      <div className="flex items-center space-x-3">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUoCsJA8tYf_P9Cp4j2jG7gdWDNMe11yCQeQ&s"
          alt="EcoMint Logo"
          className="w-full h-10"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        <h2 className="text-sm text-gray-700 font-medium bg-slate-100 p-3 rounded-xl">
          Wallet: {dummyData[userId].wallet}
        </h2>

        {!isLoggedIn ? (
          <>
            <button
              onClick={() => navigate("/login")}
              className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="bg-purple-500 text-white px-4 py-2 rounded-xl hover:bg-purple-600 transition"
            >
              Signup
            </button>
          </>
        ) : (
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition"
          >
            Logout
          </button>
        )}

        <button
          onClick={() => navigate("/")}
          className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition"
        >
          Connect
        </button>
      </div>
    </div>
  );
};

export default Navbar;

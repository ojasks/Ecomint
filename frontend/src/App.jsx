import RecentActivityG from "./RecentActivityG";
import CarbonSG from "./CarbonSG";
import { useState } from "react"; 

const Home = () => {

  const [id, setId] = useState(0)

  const CarbonAmt = [{
      id:0,
      name:"John Doe",
      amount: 12.8,
      token: 5
    },
    { 
      id:1,
      name:"Sunnt Doe",
      amount: 40,
      token: 8
    }
  ]

  return (
    <div className="p-6 bg-green-50 min-h-screen">
      {/* Top section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="text-lg font-semibold text-gray-700 mb-2">
            Total Carbon Saved:
          </div>
          <div className="text-xl font-bold text-green-700">
            {CarbonAmt[id].amount} kg CO₂
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="text-lg font-semibold text-gray-700 mb-2">
            EcoTokens Earned:
          </div>
          <div className="text-xl font-bold text-green-700">
            {CarbonAmt[id].token} ECO
          </div>
        </div>
      </div>

      {/* Middle section: Graphs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <CarbonSG />
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <RecentActivityG />
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Badges Earned
          </h2>
          <div>
            <div className="flex flex-row mb-3 gap-4">
              <img className="w-10 h-10" src="https://www.schoolbadgesuk.co.uk/cdn/shop/products/SBUK116-1a.png?v=1527506911"/>
              <img className="w-12 h-12" src="https://png.pngtree.com/png-clipart/20250119/original/pngtree-golden-winged-achievement-badge-png-image_19995876.png"/>
              <h2>Sa verv</h2>
            </div>
            <div className="flex flex-row">
              <img className="w-10 h-8" src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/trophy.png"/>
              EcoShopper Lv1
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            <h2 className="mb-4">Recent Activity</h2>
            <div className="flex flex-row mb-3 gap-2">
              <input type="checkbox" className="scale-125 border-l-red-950" />
              <p className="text-sm">2kg CO₂ saved buying Bamboo Bottle on Flipkart</p>
            </div>
            <div className="flex flex-row mb-3 gap-2">
              <input type="checkbox" className="scale-125 border-l-red-950 "/>
              <p className="text-sm ">0.5kg CO₂ saved skipping plastic-packaged product</p>
            </div>
          </h2>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            <h2 className="mb-4">EcoDAO </h2>
            <div className="flex flex-row mb-3 gap-2">
              <input type="checkbox" className="scale-125 border-l-red-950"/>
              <p className="text-sm"> Increase token rewards from 2 + 3 per kg saved</p>
            </div>
            <div className="flex flex-row mb-3 gap-2">
              <input type="checkbox" className="scale-125 border-l-red-950"/>
              <p className="text-sm ">Add new partner "GreenPods"</p>
            </div>
          </h2>
        </div>

      </div>
    </div>
  );
};

export default Home;

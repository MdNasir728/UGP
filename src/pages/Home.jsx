import CheckOnLocation from "@/components/CheckOnLocation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
// import background from "src/assets/background.jpg";

const Home = () => {
  const [location, setLocation] = useState("");
  const [flag, setFlag] = useState(false);
  return (
    <>
      <div className="w-full bg-[#0e1117] h-full">
        <div className="flex flex-col justify-center p-8 gap-4">
          <h3 className="font-semibold text-5xl mt-16 mb-8">
            Know Your Water Quality
          </h3>
          <p className="font-medium text-lg">
            At AquaInsight, we are committed to providing you with accurate and
            reliable information about water quality. Access real-time data and
            comprehensive analysis on various parameters such as turbidity, pH
            levels, dissolved oxygen, and more. Whether you're concerned about
            drinking water safety, environmental impact, or recreational
            activities, our platform offers valuable insights to help you make
            informed decisions. Explore our interactive tools, educational
            resources, and expert recommendations to better understand water
            quality in your area. Join us in safeguarding this precious resource
            for future generations.
          </p>
        </div>
        <div className="w-full h-[2px] bg-slate-400 px-5" />
        <div>
          <h5 className="flex flex-col items-center justify-center p-8 gap-4 font-semibold text-xl">
            Check Water Quality in Your Area
          </h5>
          <CheckOnLocation />
          {/* <div className="flex gap-4 justify-center items-center">
            <Input
              className="w-1/3 bg-gray-700"
              type="text"
              placeholder="Enter Your Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <Button
              className="bg-white text-sky-600 border-2 border-zinc-800 text-lg font-medium shadow-md hover:bg-transparent rounded-xl duration-300 hover:text-zinc-900"
              onClick={() => setFlag(true)}
            >
              Search
            </Button>
          </div> */}
        </div>
        {flag && (
          <p></p>
          // <div className="flex flex-col items-start justify-center gap-2 text-xl font-medium p-8 text-left text-blue-900 bg-blend-difference">
          //   <p>General Water Quality Rating:</p>
          //   <p>Water Quality for Children: </p>
          //   {/* <p>Water Quality for Pregnant Women: </p> */}
          //   <p>Water Quality for Elderly </p>
          // </div>
        )}
      </div>
    </>
  );
};

export default Home;

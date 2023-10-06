import React from "react";
import { Link } from "react-router-dom";

const MainMenu = () => {
  const backgroundStyle = {
    backgroundImage: `url('./public/fon.jpg')`, // Replace with the correct path to your image
  };

  return (
    <div
      style={backgroundStyle}
      className="h-screen bg-gradient-to-br from-slate-900 to-slate-700 flex items-center justify-center flex-col gap-6"
    >
      <Link
        to={"/game"}
        className="w-2/12 max-lg:w-[340px] flex items-center justify-center  py-3 border border-white  text-white hover:bg-gray-900 hover:border-transparent hover:transition-all rounded-lg hover:animate-bounce"
      >
        Start
      </Link>
      <Link
        to={"/settings"}
        className="w-2/12 max-lg:w-[340px] flex items-center justify-center  py-3 border border-white  text-white hover:bg-gray-900 hover:border-transparent hover:transition-all rounded-lg hover:animate-bounce"
      >
        Settings
      </Link>
    </div>
  );
};

export default MainMenu;

import React from "react";

const Logo = ({ width = "100px", textColor="text-white"}) => {
  return (
    <div>
      <h1 className="text-orange-600 font-extrabold text-2xl md:text-3xl">
        Blog <span className={`${textColor}`}>App</span>
      </h1>
    </div>
  );
};

export default Logo;

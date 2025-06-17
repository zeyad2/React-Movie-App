import React from "react";

const Header = () => {
  return (
    <header className="flex flex-col justify-center py-15">
      <div className="w-[40%] mx-auto">
        <img src="../../public/hero.png"  alt="" />
      </div>
      <h1 className="text-white max-w-3xl mx-auto text-5xl text-center capitalize mt-3">
        Find <span className="gradient">Movies </span> you'll Enjoy without the
        hassle
      </h1>
    </header>
  );
};

export default Header;

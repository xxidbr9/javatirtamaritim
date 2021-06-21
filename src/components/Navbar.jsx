import React, { useEffect, useRef } from "react";
import { FiPhone, FiMail } from "react-icons/fi";

const MiniText = (props) => <span className="pl-3">{props.children}</span>;

const TopNavbar = (props) => {
  return (
    <nav className="w-full bg-black">
      <div className="container flex flex-row-reverse items-center text-white text-sm h-6 font-medium m-auto">
        <div className="flex items-center">
          <FiMail />
          <MiniText>Javatirtamaritim@gmail.com</MiniText>
        </div>
        <div className="flex items-center mr-5">
          <FiPhone />
          <MiniText>+62 778 7490 805</MiniText>
        </div>
      </div>
    </nav>
  );
};

const BottomNavbar = (props) => {
  return (
    <nav className="w-full bg-white h-16">
      <div className="container h-full m-auto flex justify-between items-center">
        <span className="uppercase font-bold text-2xl">JAVA TIRTA</span>
        <ul className="flex flex-row gap-10 font-medium">
          <li className="text-red-500">Home</li>
          <li>Service</li>
          <li>Galery</li>
          <li>About</li>
        </ul>
      </div>
    </nav>
  );
};

const Navbar = () => {
  const ref = useRef(null);
  useEffect(() => {
    console.log(ref.current.getBoundingClientRect());
  }, [ref]);
  return (
    <nav className="shadow-md fixed w-full" ref={ref}>
      <TopNavbar />
      <BottomNavbar />
    </nav>
  );
};

export default Navbar;

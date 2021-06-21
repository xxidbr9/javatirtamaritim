import React from "react";
import Navbar from "../components/Navbar";
const IndexPage = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="w-full bg-red-500 h-full">hello mantap seep</div>
        <a href="/about">sini about</a>
      </div>
    </>
  );
};

export default IndexPage;

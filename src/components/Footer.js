import React from "react";
import { FaHeart } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="flex footer-container">
      <h1>
        Made by @Prathamesh Patil
        <FaHeart size={40} style={{ color: "red", margin: "10px" }} />
      </h1>
      <h5>+91 7990977945</h5>
      <h6>prathmeshpatil418@gmail.com</h6>
    </div>
  );
};

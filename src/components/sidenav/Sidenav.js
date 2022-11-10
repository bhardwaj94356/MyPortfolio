import React from "react";
import "./Sidenav.css";
import "../Style.css";
import { FaUserSecret, FaPhoneAlt, FaUserGraduate, FaEdit } from 'react-icons/fa';

const Sidenav = () => {
  return (
    <>
      <div className="side_col color_bg">
        <div className="select color_gray">
          <ul>
            <li><a href="#aboutMe" rel="noopener noreferrer"><FaUserSecret size={30} /></a></li>
            <li><a href="#contact" rel="noopener noreferrer"><FaPhoneAlt size={30} /></a></li>
            <li><a href="#education" rel="noopener noreferrer"><FaUserGraduate size={30} /></a></li>
            <li><a href="#exp" rel="noopener noreferrer"><FaEdit size={30} /></a></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidenav;

import React, { useState } from "react";
import "../styles/Navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiFillYoutube } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { BiVideoPlus } from "react-icons/bi";
import { BiBell } from "react-icons/bi";
import { BsFillMicFill } from "react-icons/bs";
import Search from "./Search";

const Navbar = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="navbar">
      <div className="nav-left nav-divs">
        <RxHamburgerMenu className="hamburger-icon" />
        <div className="icons-div">
          <AiFillYoutube className="youtube-icon" />
          <h2>YouTube</h2>
        </div>
      </div>
      <div className="nav-mid  nav-divs">
        <form action="">
          <input
            type="text"
            placeholder="Search"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          ></input>
          <div className="search-icon-div">
            <BsSearch className="search-icon" />
            <span className="search-span">Search</span>
          </div>
          {isFocused && (
            <div className="search-history">
              <Search data="Kalaastar" />
              <Search data="Yo Yo Honey Singh" />
              <Search data="Mern Stack" />
              <Search data="How to cook chicken biryani" />
              <Search data="Thapa Technical" />
              <Search data="Treat you better" />
              <Search data="Shawn Mendes" />
              <Search data="Charlie Puth" />
              <Search data="We dont talk anymore song" />
            </div>
          )}
        </form>
        <BsFillMicFill className="mic-icon" />
        <span className="mic-span">Search with your voice</span>
      </div>
      <div className="nav-right  nav-divs">
        <BiVideoPlus className="video-add-icon" />

        <div className="notification-div">
          <BiBell className="bell-icon" />
          <span>9+</span>
        </div>
        <img
          className="account-image"
          src="https://i.pinimg.com/736x/6c/23/7d/6c237da075a7ce3db6ed2010148b1215.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Navbar;

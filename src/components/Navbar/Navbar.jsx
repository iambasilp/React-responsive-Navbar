import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "./navbar.css";

const Menu = () => {
  return (
    <>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#home">What is GPT?</a>
      </p>
      <p>
        <a href="#home">Open Ai</a>
      </p>
      <p>
        <a href="#home">Case Studies</a>
      </p>
      <p>
        <a href="#home">Library</a>
      </p>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="gpt__navbar">
      <div className="gpt__navbar-links">
        <div className="gpt__navbar-links__logo">
          <h1>BS</h1>
        </div>
        <div className="gpt__navbar-links__container">
          <Menu />
        </div>
      </div>
      <div className="gpt__navbar-sign">
      
        <button type="button">Sing up</button>
      </div>
      <div className="gpt__navbar-menu">
        {toggleMenu ? (
          <AiOutlineClose
            color="#fff"
            size={29}
            onClick={() => {
              setToggleMenu(false);
            }}
          />
        ) : (
          <AiOutlineMenu
            color="#fff"
            size={29}
            onClick={() => {
              setToggleMenu(true);
            }}
          />
        )}
        {toggleMenu && (
          <div className="gpt__navbar-menu__container scale-up-center">
            <div className="gpt__navbar-menu__container-links">
              <Menu />
            </div>
            <div className="gpt__navbar-menu__container-links-sign">
           
              <button type="button">Sing up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;

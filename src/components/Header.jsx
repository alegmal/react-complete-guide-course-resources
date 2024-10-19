import React from "react";
import img from "../assets/react-core-concepts.png";

import "./Header.css";

const Header = (props) => {
  const firstWords = ["Fundamental", "Core", "Essensial"];
  const randomInt = () => Math.floor(Math.random() * 3);
  const firstWord = firstWords[randomInt()]

  return (
    <header>
      <img src={img} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {firstWord} React concepts you will need for almost any
        app you are going to build!
      </p>
    </header>
  );
};

export default Header;

import React from "react";
import "./navbar.scss";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";
import { FaLinkedinIn } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import Logo from "../../assets/images/Logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navTop">
        <span className="slogan">Kuichouo BI DO BIGAM</span>
        <div className="second">
          <div className="social">
            <span>Suivez nous:</span>
            <FaFacebookF className="socialIcon" />
            <FaInstagram className="socialIcon" />
            <SlSocialTwitter className="socialIcon" />
            <FaLinkedinIn className="socialIcon" />
          </div>
          <BsSearch
            style={{ fontSize: "22px", color: "white", cursor: "pointer" }}
          />
        </div>
      </div>
      <div className="navBottom">
        <img src={Logo} alt="logo" className="logo" />
        <ul className="menu">
          <Link to="/">
            <li>Accueil</li>
          </Link>
          <Link to="/about">
            <li>Cour Royal</li>
          </Link>
          <Link>
            <li>Communautés Associatives</li>
          </Link>
          <Link to="/projects">
            <li>Projets</li>
          </Link>
          <Link>
            <li>Evènements</li>
          </Link>
          <Link to="/galerie">
            <li>Galerie</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
        <div className="btn">Faire un don</div>
      </div>
    </div>
  );
};

export default Navbar;

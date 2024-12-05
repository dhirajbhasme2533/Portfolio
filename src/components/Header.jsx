import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import resume from "../assets/Dhiraj_Bhasme_UIUX_Designer.pdf";
import { Dribbble, GithubIcon, Linkedin, MailIcon, PhoneIcon } from "lucide-react";
import behance from '../assets/behance.svg'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      // Change 50 to adjust when the effect starts
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleOnClick = () => {
    setShowNav(!showNav);
  };

  return (
    <header
      className={`fixed w-full lg:h-[88px] flex justify-between items-center p-5 lg:px-20 lg:py-4 ${
        isScrolled
          ? "bg-[#292929] bg-opacity-20 backdrop-blur-lg"
          : "bg-transparent"
      } z-50`}
    >
      <div className="text-base md:text-2lg lg:text-3xl font-serif text-dp">
        <div>A Designer's Perspective</div>
        <div className="text-white text-xl">Dhiraj Bhasme</div>
      </div>
      <div className="flex items-center gap-10 text-dp">
        <div className="md:flex gap-5 w-full justify-center lg:justify-start hidden">
          <a href="tel:+919404308959" target="_blank">
            <PhoneIcon size={25} />
          </a>
          <a href="mailto:dhirajbhasmeuiux@gmail.com" target="_blank">
            <MailIcon size={25} />
          </a>
          <a href="https://dribbble.com/Dhiraj_UIX" target="_blank">
            <Dribbble size={25}  />
          </a>
          <a href="https://www.behance.net/dhirajbhasme4" target="_blank">
            <img src={behance} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/dhiraj-bhasme-68963821a/"
            target="_blank"
          >
            <Linkedin size={25} />
          </a>
        </div>
      <motion.a
        whileHover={{}}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring" }}
        className="px-4 py-1 md:px-5 md:py-2 lg:px-10 lg:py-2 font-sans font-bold bg-dp rounded-lg text-white cursor-pointer"
        href={resume}
        download
      >
        Resume
      </motion.a>
      </div>
    </header>
  );
}

export default Header;

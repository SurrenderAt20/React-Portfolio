import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

export const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/lasse-vestergaard-fuglsbjerg-296876195/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/SurrenderAt20" target="_blank">
        <FaGithub />
      </a>
      {/* <a href="https://dribbble.com" target="_blank"><FiDribbble/></a> */}
    </div>
  );
};

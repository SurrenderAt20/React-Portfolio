import React from "react";
import "./Header.css";
import { CTA } from "./CTA";
import LASSE from "../../assets/lasse.jpg";
import { HeaderSocials } from "./HeaderSocials";

export default function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Lasse Vestergaard Fuglsbjerg</h1>
        <h5 className="text-light">
          {" "}
          Development | SAP | Business Intelligence | RPA
        </h5>

        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={LASSE} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          {" "}
          Scroll Down{" "}
        </a>
      </div>
    </header>
  );
}

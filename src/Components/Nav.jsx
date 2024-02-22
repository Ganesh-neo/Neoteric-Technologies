import React from "react";
import "../Styles/HomePage.css";
import "../Styles/Nav.css";

const Nav = () => {
  return (
    <div className="headers-v12">
          <div className="neoteric-technology-logo-1-1-parent">
            <img
              className="neoteric-technology-logo-1-1"
              alt=""
              src="/neoterictechnologylogo-1-1@2x.png"
            />
            <div className="sections">
              <div className="services">Services</div>
              <div className="services">Industries</div>
              <div className="link-list">
                <div className="services">Careers</div>
              </div>
              <div className="services">About</div>
              <div className="services">Contact</div>
              <div className="services">{`News & Blog`}</div>
            </div>
          </div>
        </div>
  );
};

export default Nav;

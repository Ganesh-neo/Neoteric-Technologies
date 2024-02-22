import React from 'react';
import "../../Styles/HomeFirstCarousel.css";



const HomeFirstCarousel = () => {
    return (
        <div className="component-13">
          <img className="component-13-child" alt="" src="/line-1@2x.png" />
          <img className="vector-icon" alt="" src="/vector.svg" />
          <div className="unlocking-potential-unleashin-parent">
            <div className="unlocking-potential-unleashin-container">
              <span className="unlocking-potential-unleashin">{`Unlocking Potential, Unleashing `}</span>
              <b className="innovation">Innovation</b>
            </div>
            <div className="frame-parent">
              <div className="arrow-circle-left-parent">
                <img
                  className="arrow-circle-left-icon"
                  alt=""
                  src="/arrowcircleleft.svg"
                />
                <img
                  className="arrow-circle-left-icon"
                  alt=""
                  src="/arrowcircleright.svg"
                />
              </div>
              <div className="div">
                <b>01</b>
                <span> / 03</span>
              </div>
            </div>
          </div>
        </div>
    );
}

export default HomeFirstCarousel;

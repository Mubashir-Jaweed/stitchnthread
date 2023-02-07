import React from "react";
import carousel from "../assets/carousel.png";
import r from "../assets/back.jpg";
import Fade from "react-reveal/Fade";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
const Carousel = () => {


    const Left = () => {
      document.getElementById("content").scrollLeft -= 270;
    };

    const Right = () => {
      document.getElementById("content").scrollLeft += 270;
    };

    
  return (
    <div className="carousel">
      <Fade top>
        <p className="car-h">Our Portfolio</p>
      </Fade>
      <button className="car-btn l" onClick={() => Left()}>
        <ChevronLeftIcon />
      </button>
      <button className="car-btn r" onClick={() => Right()}>
        <ChevronRightIcon />
      </button>
      <Fade bottom>
        <div id="content" className="car-main scroll-smooth">
          <div>
            <div className="car-p">
              <img src={r} />
              <div className="car-d">
                <p>Digitizing</p>
              </div>
            </div>
          </div>
          <div>
            <div className="car-p">
              <img src={r} />
              <div className="car-d">
                <p>Vectorizing</p>
              </div>
            </div>
          </div>{" "}
          <div>
            <div className="car-p">
              <img src={r} />
              <div className="car-d">
                <p>Digitizing</p>
              </div>
            </div>
          </div>{" "}
          <div>
            <div className="car-p">
              <img src={r} />
              <div className="car-d">
                <p>Vectorizing</p>
              </div>
            </div>
          </div>{" "}
          <div>
            <div className="car-p">
              <img src={r} />
              <div className="car-d">
                <p>Digitizing</p>
              </div>
            </div>
          </div>{" "}
          <div>
            <div className="car-p">
              <img src={r} />
              <div className="car-d">
                <p>Vectorizing</p>
              </div>
            </div>
          </div>{" "}
          <div>
            <div className="car-p">
              <img src={r} />
              <div className="car-d">
                <p>Digitizing</p>
              </div>
            </div>
          </div>{" "}
          <div>
            <div className="car-p">
              <img src={r} />
              <div className="car-d">
                <p>Vectorizing</p>
              </div>
            </div>
          </div>{" "}
          <div>
            <div className="car-p">
              <img src={r} />
              <div className="car-d">
                <p>Digitizing</p>
              </div>
            </div>
          </div>{" "}
          <div>
            <div className="car-p">
              <img src={r} />
              <div className="car-d">
                <p>Digitizing</p>
              </div>
            </div>
          </div>{" "}
          <div>
            <div className="car-p">
              <img src={r} />
              <div className="car-d">
                <p>Digitizing</p>
              </div>
            </div>
          </div>{" "}
          <div>
            <div className="car-p">
              <img src={r} />
              <div className="car-d">
                <p>Digitizing</p>
              </div>
            </div>
          </div>{" "}
          <div>
            <div className="car-p">
              <img src={r} />
              <div className="car-d">
                <p>Digitizing</p>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Carousel;

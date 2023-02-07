import React from 'react'
import Fade from "react-reveal/Fade";

const Personalize = () => {
  return (
    <div className="per">
      <Fade left>
        <div>
          <p className="per_h">
            PROFESSIONAL DIGITIZING & VECTOR ART CONVERSIONS
          </p>
          <p className="per_t">
            <span className="per_sp">Stitch N Threads </span>
            offers quality custom embroidery digitizing services and vector art
            conversion at very competitive prices
          </p>

          <button className="per_btn">Get a Quote</button>
          <button className="per_btn">Learn More</button>
        </div>
      </Fade>
    </div>
  );
}

export default Personalize
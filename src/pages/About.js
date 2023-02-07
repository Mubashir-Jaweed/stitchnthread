import React from 'react'
import Service from './Service';
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <div className="about_cont">
      <div className="about">
        <div>
          <Fade left>
            <p className="a_h">
              We are a group of design driven individuals passionate about
              Embroidery digitizing and Vector Art.
            </p>
            <p className="a_t">
              <span className="a_ts">Stitch N Threads</span> is an embroidery
              digitizing plus Vector Art providing source that serves all
              embroidery companies such as Apparel Manufactures, Embroiders,
              Sport Shops & Custom promotional product in USA, UK, CANADA and
              AUSTRALIA. Our mission is to provide excellent quality digitized
              logos which run smoother on every embroidery machines without
              thread breaks, which increases the production up to 20%. We are
              keen focused to serve our customers with our best quality.
            </p>
          </Fade>
        </div>
      </div>
      <Service />
    </div>
  );
}

export default About
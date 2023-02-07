import React, { useEffect, useState } from 'react'
import background from '../assets/back.jpg'
import AddIcon from "@mui/icons-material/Add";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import RemoveIcon from "@mui/icons-material/Remove";

const Digitize = () => {

  const [acc1, setAcc1] = useState(true)
  const [acc2, setAcc2] = useState(false)

  return (
    <div className="dig">
      <img className="dig-back" src={background} />

      <div className="dig-main">
        <h1 className="dig-h">
          We Have Everything You Need To Launch And Grow A Successful Digital
          Business!
        </h1>
        <div className="dig-acc">
          <div className="acc-item">
            <div
              className="acc-h"
              onClick={() => {
                setAcc1(!acc1);
              }}>
              {!acc1 ? (
                <AddIcon className="acc-i"  />
              ) : (
                <RemoveIcon className="acc-i"  />
              )}
              Crisp Looking Logos with Minimal Thread Changes.
              <KeyboardArrowDownIcon
                className={`acc-i acc-d `}
                
              />
            </div>
            <div className={`acc-b ${acc1 ? "active" : ""}`}>
              <div className="acc-b-h">
                Our Master Embroidery Digitizer Has 25+ Years Of Experience
              </div>
              <div className="acc-b-t">
                Looking for quality custom embroidery logo digitizing services
                at very competitive prices? We proudly offer USA services at
                overseas prices.
              </div>
              <ul className="acc-b-p">
                <li>
                  Standard turnaround for embroidery digitizing is 8 to 12 hours
                  (Monday - Friday)
                </li>
                <li>No extra charge for rush orders and edits</li>
                <li>Estimates for custom digitizing are FREE and SAME DAY</li>
                <li>
                  Most embroidery Machine Formats are supported, including: DST,
                  EXP, CND, JEF, PES, HUS, XXX, ECT ...
                </li>
              </ul>
            </div>
          </div>

          <div className="acc-item">
            <div className="acc-h" onClick={() => setAcc2(!acc2)}>
              {!acc2 ? (
                <AddIcon className="acc-i"  />
              ) : (
                <RemoveIcon className="acc-i"  />
              )}
              Convert Logos & Images Into High Quality Vector Art.
              <KeyboardArrowDownIcon
                
                className={`acc-i acc-d `}
              />
            </div>
            <div className={`acc-b ${acc2 ? "active" : ""}`}>
              <div className="acc-b-h">
                We Can Deliver Adobe Psd, Ai And Eps Files, As Well As Corel
                Draw Cdr Files.
              </div>
              <div className="acc-b-t">
                When you convert an image, whether it's a sketch, a logo or
                photo into vector art, it immediately gives you unlimited
                options for using it in print and the digital space. We provide
                only the highest quality vectorizing services, done in the USA.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Digitize
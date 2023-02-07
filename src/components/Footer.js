import React from 'react'
import logo from "../assets/logo.png";
import LocationCityOutlinedIcon from "@mui/icons-material/LocationCityOutlined";
import AddIcCallOutlinedIcon from "@mui/icons-material/AddIcCallOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";

const Footer = () => {
  return (
    <div className="footer">
      <div className="foo-main">
        <div style={{ textAlign: "start"}}>
          <img className="logo" src={logo} />
          <a className="foo-p">
            <LocationCityOutlinedIcon />
            House # A-2, Block-D Saima Arabian Villas,
          </a>
          <a className="foo-p">
            <EmailOutlinedIcon />
            stitchnthreadss@gmail.com
          </a>
          <a className="foo-p">
            <AddIcCallOutlinedIcon />
            +92 (319) 240-9828
          </a>

          <div className='foo-mobileview' style={{ display: "flex", marginTop: "30px" }}>
            <a className="foo-i">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a className="foo-i">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a className="foo-i">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
            <a className="foo-i">
              <ion-icon name="logo-pinterest"></ion-icon>
            </a>
          </div>
        </div>
        <p className='foo-mobileview-cr' style={{padding:'20px'}}>© 2022 Stitch N Threads. All Rights Reserved. || Karachi, Pakistan</p>
      </div>
    </div>
  );
}

export default Footer
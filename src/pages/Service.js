import React from "react";
import TvIcon from "@mui/icons-material/Tv";
import PublicIcon from "@mui/icons-material/Public";
import WebIcon from "@mui/icons-material/Web";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import Tilty from "react-tilty";

const Service = () => {
  return (
    <div className="ser">
      <Tilty perspective={500} reset={true}>
        <div className="ser_box">
          <div className="ser_i">
            <TvIcon style={{ fontSize: "50px" }} />
          </div>
          <p className="ser_i_t">Chest Logo Digitizing</p>
        </div>
      </Tilty>
      <Tilty perspective={500} reset={true}>
        <div className="ser_box">
          <div className="ser_i">
            <PublicIcon style={{ fontSize: "50px" }} />
          </div>
          <p className="ser_i_t">Puff Digitizing</p>
        </div>
      </Tilty>
      <Tilty perspective={500} reset={true}>
        <div className="ser_box">
          <div className="ser_i">
            <WebIcon style={{ fontSize: "50px" }} />
          </div>
          <p className="ser_i_t">Applique</p>
        </div>
      </Tilty>
      <Tilty perspective={500} reset={true}>
        <div className="ser_box">
          <div className="ser_i">
            <ViewInArIcon style={{ fontSize: "50px" }} />
          </div>
          <p className="ser_i_t">Web Development</p>
        </div>
      </Tilty>
    </div>
  );
};

export default Service;

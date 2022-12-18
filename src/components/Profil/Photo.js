import React from "react";
import Myphoto from "../../components/Myphoto.jpg";

const Photo = () => {
  const stylePhoto = {
    height: "500px",
  };
  return (
    <div>
      <img src={Myphoto} alt="My Photo" style={stylePhoto} />
    </div>
  );
};

export default Photo;

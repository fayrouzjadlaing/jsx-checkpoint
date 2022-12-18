import React from "react";

const Adresse = () => {
  const styleButton = {
    height: "50px",
    width: "150px",
    backgroundColor: "#696969",
    borderRadius: "30px",
    color: "#FFB6c1",
    fontSize: "25px",
  };
  const flexi = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-betwwen",
  };
  return (
    <div className="box2" style={flexi}>
      <h2>Cité des jeunes ,Gafsa ,Tunisie</h2>
      <button className="button" style={styleButton}>
        Contact Me
      </button>
    </div>
  );
};

export default Adresse;

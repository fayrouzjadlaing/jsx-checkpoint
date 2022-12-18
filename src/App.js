import "./App.css";
import Photo from "./components/Profil/Photo";
import FullName from "./components/Profil/FullName";
import Adresse from "./components/Profil/Adresse";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <div className="container">
        <Photo />
        <div className="box">
          <FullName />
          <Adresse />
        </div>
      </div>
    </Fragment>
  );
}

export default App;

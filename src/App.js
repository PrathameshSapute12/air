import React from "react";
import Navbar from "./Component/Navbar/Navbar1";
import Video from "./Component/Video/Video";
import Cards from "./Component/Cards/Cards";
import Info from "./Component/Info/Info";
import Social from "./Component/Social/Social";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import Helplink from "./Component/Helpl/Helplink";
const App = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div>
        <Video />
      </div>

      <div>
        <Cards />
      </div>

      <div>
        <Info />
      </div>

      <div>
        <Helplink />
      </div>
      
    </div>
  );
};

export default App;

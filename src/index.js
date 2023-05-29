import React from "react";
import ReactDOM from "react-dom";
import "./gym.css";

import Monday from "./Monday";
import Tuesday from "./Tuesday";
import Wednesday from "./Wednesday";
import Thrusday from "./Thrusday";
import Friday from "./Friday";
import Saturday from "./Saturday";

ReactDOM.render(
  <>
    <Monday />
    <Tuesday />
    <Wednesday />
    <Thrusday />
    <Friday />
    <Saturday />
  </>,
  document.getElementById("root")
);
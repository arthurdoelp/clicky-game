import React from "react";
import "./style.css";

function Container(props) {
  return <div className={props.guess ? "container" : "container incorrectcontainer"}>{props.children}</div>;
}

export default Container;

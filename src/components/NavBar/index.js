import React from "react";
import "./style.css";

// messageCorrectAni(() => {
//   document.getElementById('h5').className ='message';
// }
// const message = correct ? correctMsgAni() : incorrectMsgAni();

function NavBar(props) {
  return (
    <div>
      <nav class="navbar fixed-top">
        <a class="navbar-brand" href="/">Clicky Game</a>
        <h5 className={props.guess ? "correct" : "incorrect"}>{props.message}</h5>
        <h5>Score: {props.score} | Top Score: {props.highScore}</h5>
      </nav>
    </div>
  );


}

export default NavBar;

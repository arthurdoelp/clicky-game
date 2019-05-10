import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container" onClick={() => props.clickFriend(props.id)}>
        <img alt={props.name} src={props.image} />
        <p>{props.isClicked}</p>
      </div>
      <span onClick={() => props.removeFriend(props.id)} className="remove">
        𝘅
      </span>
    </div>
  );
}

export default FriendCard;

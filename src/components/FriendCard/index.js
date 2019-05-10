import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container" onClick={() => props.clickFriend(props.id)}>
        <img alt={props.name} src={props.image} />
        <p>{props.isClicked}</p>
      </div>
    </div>
  );
}

export default FriendCard;

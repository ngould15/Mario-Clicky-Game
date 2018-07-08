import React from "react";
import "./FriendCard.css";

// const FriendCard = props => (
/*   <div className="card">
    <div className="img-container">
    <a onClick={() => props.selectFriend(props.name)} 
    className={props.curScore === 0 ? "style_prevu_kit style_prevu_kit_ex" : "style_prevu_kit"}
>
    <img alt={props.name} src={props.image} />
</a>
</div>
</div>
); */


const FriendCard = props => (
	<div onClick={() => props.selectFriends(props.friend)} className="card">
		<div className="img-container">
      		<img alt={props.name} src={props.image} />
    	</div>
  </div>
);

export default FriendCard;

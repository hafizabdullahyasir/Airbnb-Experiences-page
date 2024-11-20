import React from "react";
// If you have it in the public folder, use /images/star.png instead
import star from "/images/star.png";

const Card = (props) => {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <div className="cardBadge">{badgeText}</div>}
      <img src={props.item.coverImg} alt="Katie Zaferes" className="dp" />

      <div className="cardStats">
        <img src={star} alt="Star" className="icon" />
        <span className="gray">{props.item.stats.rating}</span>
        <span>({props.item.stats.reviewCount})</span>
        <span>.{props.item.location}</span>
      </div>
      <p className="card--title">{props.item.title}</p>
      <p>
        <span className="bold">From ${props.item.price}</span>/ person
      </p>
    </div>
  );
};

export default Card;

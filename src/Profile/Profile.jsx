import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-content">
      <img src="./Profile-photo.jpg" alt="profile picture" />
      <div className="profile-text">
        <p>სახელი: ირაკლი</p>
        <p>გვარი: მამულაშვილი</p>
        <p>Email: herohero@gmail.com</p>
        <p> პლატფორმა: Scryde</p>
        <button>რედაქცია</button>
      </div>
    </div>
  );
};

export default Profile;

import React from "react";
import './Profile.css';

const Profile = () => {
  return (
    <>
      <div className="profile_section d-flex ">
        <div className="img">
          <img src="https://inno-scis-client.web.app/static/media/male.55a0b867.png" alt="profile"  className="profile_img"/>
        </div>
        <div className="profile_text mx-3">
          <h3>Hi, Reader</h3>
          <span>Here's your news!</span>
        </div>
      </div>
    </>
  );
};

export default Profile;

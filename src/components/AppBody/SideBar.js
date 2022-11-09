import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import "./SideBar.css";

function SideBar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => {
    return (
      <div className="sidebar__recentItem">
        <div className="sidebar__hash">#</div>
        <p>{topic}</p>
      </div>
    );
  };
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="cover"
        />
        <Avatar src={user.photoURL} className="sidebar__avatar">
          {user.displayName[0].toUpperCase()}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2836</p>
        </div>
        <div className="sidebar__stat">
          <p>views on posts</p>
          <p className="sidebar__statNumber">2496</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>recent</p>
        {recentItem("reactjs")}
        {recentItem("web development")}
        {recentItem("problem solving")}
      </div>
    </div>
  );
}

export default SideBar;

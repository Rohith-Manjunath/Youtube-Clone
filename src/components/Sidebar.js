import React from "react";
import "../styles/Sidebar.css";
import { MdHomeFilled } from "react-icons/md";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { MdOutlineSlowMotionVideo } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-icons">
        <MdHomeFilled className="sidebar-icon" />
        <span className="sidebar-icon-info">Home</span>
      </div>
      <div className="sidebar-icons">
        <MdOutlineSlowMotionVideo className="sidebar-icon" />
        <span className="sidebar-icon-info">Shorts</span>
      </div>
      <div className="sidebar-icons">
        <MdOutlineSubscriptions className="sidebar-icon" />
        <span className="sidebar-icon-info">Subscription</span>
      </div>
      <div className="sidebar-icons">
        <MdOutlineVideoLibrary className="sidebar-icon" />
        <span className="sidebar-icon-info">Library</span>
      </div>
    </div>
  );
};

export default Sidebar;

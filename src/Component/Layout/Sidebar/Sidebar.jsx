import { Button } from "@mui/material";
import React from "react";
import "./Sidebar.css";
import AddIcon from "@mui/icons-material/Add";
import SidebarOptions from "./SidebarOptions/SidebarOptions";
import InboxIcon from "@mui/icons-material/Inbox";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon fontSize="large" />}
        className="sidebarCompose"
      >
        COMPOSE
      </Button>
      <SidebarOptions Icon={<InboxIcon />} title={`inbox`} number={54} />
    </div>
  );
};

export default Sidebar;

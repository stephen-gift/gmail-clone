import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar, IconButton } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Header = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src={
            "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"
          }
          alt="gmail logo"
        />
      </div>

      <div className="headerMiddle">
        <IconButton>
          <SearchIcon />
        </IconButton>

        <input type="search" placeholder="Search Mail" />

        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>

      <div className="headerRight">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar></Avatar>
      </div>
    </div>
  );
};

export default Header;

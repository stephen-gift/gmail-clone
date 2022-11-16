import { Button, IconButton } from "@mui/material";
import React from "react";
import "./Sidebar.css";
import SidebarOptions from "./SidebarOptions/SidebarOptions";
import {
  AccessTime,
  Add,
  Duo,
  ExpandMore,
  Inbox,
  LabelImportant,
  NearMe,
  Note,
  Person,
  Phone,
  Star,
} from "@mui/icons-material";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Button startIcon={<Add fontSize="large" />} className="sidebarCompose">
        COMPOSE
      </Button>
      <SidebarOptions
        Icon={<Inbox />}
        title={`inbox`}
        number={54}
        selected={true}
      />
      <SidebarOptions Icon={<Star />} title={`starred`} number={54} />
      <SidebarOptions Icon={<AccessTime />} title={`snoozed`} number={54} />
      <SidebarOptions
        Icon={<LabelImportant />}
        title={`important`}
        number={54}
      />
      <SidebarOptions Icon={<NearMe />} title={`sent`} number={54} />
      <SidebarOptions Icon={<Note />} title={`draft`} number={54} />
      <SidebarOptions Icon={<ExpandMore />} title={`more`} number={54} />

      <div className="sidebarFooter">
        <div className="sidebarFooterIcons">
          <IconButton>
            <Person />
          </IconButton>
          <IconButton>
            <Duo />
          </IconButton>
          <IconButton>
            <Phone />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

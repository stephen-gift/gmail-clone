import {
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  Inbox,
  LocalOffer,
  MoreVert,
  People,
  Redo,
  Settings,
} from "@mui/icons-material";
import { Checkbox, IconButton } from "@mui/material";
import React from "react";
import Section from "../../Component/Section/Section";
import "./EmailList.css";

const EmailList = () => {
  return (
    <div className="emailList">
      <div className="emailListSettings">
        <div className="emailListSettingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Redo />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="emailListSettingsRight">
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>
      <div className="emailListSections">
        <Section Icon={<Inbox />} title="primary" color="red" selected={true} />
        <Section Icon={<People />} title="social" color="#1A73E8" />
        <Section Icon={<LocalOffer />} title="promotions" color="green" />
      </div>
    </div>
  );
};

export default EmailList;

import {
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  MoreVert,
  Redo,
  Settings,
} from "@mui/icons-material";
import { Checkbox, IconButton } from "@mui/material";
import React from "react";
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
         
      </div>
    </div>
  );
};

export default EmailList;

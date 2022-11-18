import {
  LabelImportantOutlined,
  StarBorderOutlined,
} from "@mui/icons-material";
import { Checkbox, IconButton } from "@mui/material";
import React from "react";
import './EmailRow.css'

const EmailRow = ({ id, title, subject, description, time }) => {
  return (
    <div className="emailRow">
      <div className="emailRowOptions">
        <Checkbox />
        <IconButton>
          <StarBorderOutlined />
        </IconButton>
        <IconButton>
          <LabelImportantOutlined />
        </IconButton>
      </div>
      <div className="emailRowTitle">{title}</div>
      <div className="emailRowMessage">
        <h4>
          {subject}
          <span className="emailRowDescription">{description}</span>
        </h4>
      </div>
      <div className="emailRowTime">{time}</div>
    </div>
  );
};

export default EmailRow;

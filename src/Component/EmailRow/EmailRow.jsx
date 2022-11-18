import {
  LabelImportantOutlined,
  StarBorderOutlined,
} from "@mui/icons-material";
import { Checkbox, IconButton } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./EmailRow.css";

const EmailRow = ({ id, title, subject, description, time }) => {
  const Navigate = useNavigate();
  const rowClickHandler = () => {
    Navigate("/mail");
  };

  return (
    <div onClick={rowClickHandler} className="emailRow">
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
          {""} <span className="emailRowDescription">-{description}</span>
        </h4>
      </div>
      <p className="emailRowTime">{time}</p>
    </div>
  );
};

export default EmailRow;

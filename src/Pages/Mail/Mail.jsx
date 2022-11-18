import {
  ArrowBack,
  CheckCircleSharp,
  Delete,
  Email,
  Error,
  ExitToApp,
  LabelImportant,
  MoreVert,
  MoveToInbox,
  Print,
  UnfoldMore,
  WatchLater,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Mail.css";

const Mail = () => {
  const Navigate = useNavigate();
  const returnHandler = () => {
    Navigate(-1);
  };
  return (
    <div className="mail">
      <div className="mailTools">
        <div className="mailToolsLeft">
          <IconButton onClick={returnHandler}>
            <ArrowBack />
          </IconButton>
          <IconButton>
            <MoveToInbox />
          </IconButton>
          <IconButton>
            <Error />
          </IconButton>
          <IconButton>
            <Delete />
          </IconButton>
          <IconButton>
            <Email />
          </IconButton>
          <IconButton>
            <WatchLater />
          </IconButton>
          <IconButton>
            <CheckCircleSharp />
          </IconButton>
          <IconButton>
            <LabelImportant />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="mailToolsRight">
          <IconButton>
            <UnfoldMore />
          </IconButton>
          <IconButton>
            <Print />
          </IconButton>
          <IconButton>
            <ExitToApp />
          </IconButton>
        </div>
      </div>

      <div className="mailBody">
        <div className="mailBodyHeader">
          <h2>Subject</h2>
          <LabelImportant className="mailImportant" />
          <p>Title</p>
          <p className="mailTime">10pm</p>
        </div>

        <div className="mailMessage">
          <p>This a Message</p>
        </div>
      </div>
    </div>
  );
};

export default Mail;

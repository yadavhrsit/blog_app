import React from "react";
import error from "../assets/icon-error.png";
import warning from "../assets/icon-warning.png";
import success from "../assets/icon-success.png";
import info from "../assets/icon-info.png";

function ShowAlert({ status, message }) {
  let icons = {
    error: error,
    warning: warning,
    success: success,
    info: info,
  };
  return (
    status && (
      <div role="alert" className={`alert alert-${status}`}>
        <img src={icons[status]} style={{ height: "24px" }}alt="" />
        <span>{message}</span>
      </div>
    )
  );
}

export default ShowAlert;

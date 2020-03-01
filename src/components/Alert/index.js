import React, { useContext } from "react";
import { CSSTransition } from "react-transition-group";
import { AlertContext } from "../../context/alert/alertContext";
import "./Alert.scss";

export const Alert = () => {
  const { alert, hide } = useContext(AlertContext);

  return (
    <CSSTransition
      in={alert.visible}
      timeout={{ enter: 400, exit: 300 }}
      classNames={"alert"}
      mountOnEnter
      unmountOnExit
    >
      <div
        className={`alert alert-${alert.type || "warning"} alert-dismissible`}
      >
        <strong>Warning!</strong>&nbsp;
        {alert.text}
        <button
          onClick={hide}
          type="button"
          className="close"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </CSSTransition>
  );
};

import styles from "./EventAlert.module.scss";
import { FC, useEffect } from "react";
import React from "react";
import Icon from "../Icon/index";
import Typography from "../Typography";

export interface IEventAlert {
  msg: string;
  eventType: "open" | "info" | "warning" | "error" | "critical";
  // onClose?: () => void;
}

const EventAlert: FC<IEventAlert> = ({ msg, eventType }) => {
  useEffect(() => {
    const eventAlert = document.getElementById("event-alert");
    eventAlert?.classList.remove("slide-right");
    eventAlert?.classList.add("slide-left");
    setTimeout(() => {
      eventAlert?.classList.remove("slide-left");
      eventAlert?.classList.add("slide-right");
      setTimeout(() => {
        // onClose();
      }, 1000);
    }, 10000);
  }, []);

  const onClose = () => {
    const eventAlert = document.getElementById("event-alert");
    eventAlert?.classList.remove("slide-left");
    eventAlert?.classList.add("slide-right");
    setTimeout(() => {
      // onClose()
    }, 1000);
  };

  return (
    <div
      id="event-alert"
      className={`${styles["event-alert"]} ${
        styles[`event-alert-${eventType}`]
      }`}
    >
      <div className={styles["event-alert-icon"]}>
        {eventType === "warning" ? (
          <>
            <Icon size="medium" name="warning" />
            <Typography type="h3">Error:</Typography>
          </>
        ) : eventType === "error" ? (
          <>
            <Icon size="medium" name="warning" />
            <Typography type="h3">Warning:</Typography>
          </>
        ) : eventType === "critical" ? (
          <>
            <Icon size="medium" name="critical" />
            <Typography type="h3">Critical:</Typography>
          </>
        ) : eventType === "info" ? (
          <>
            <Icon size="medium" name="info" />
          </>
        ) : (
          <>
            <Icon size="medium" name="event" />
            <Typography type="h3">Event:</Typography>
          </>
        )}
        <Typography type="h3">{msg}</Typography>
      </div>
      <div onClick={onClose} className={styles["event-alert-close"]}>
        <Icon size="medium" name="close" />
      </div>
    </div>
  );
};

export default EventAlert;

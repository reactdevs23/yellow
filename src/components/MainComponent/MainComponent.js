import React from "react";
import classes from "./MainComponent.module.css";
const MainComponent = ({ heading, date, postName, searchIcon, sendYourCv }) => {
  return (
    <div
      className="min-h-screen flex items-center justify-start w-full"
      style={{ background: "var(--mainBg)", overflow: "hidden" }}
    >
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.left}>
            {" "}
            <div className={classes.dateContainer}>
              <p className={classes.date}>{date}</p>
            </div>
          </div>{" "}
          <div className={classes.infoContainer}>
            <div className={classes.headingContainer}>
              {" "}
              <div className={classes.line}></div>
              <h2
                className={classes.heading}
                dangerouslySetInnerHTML={{ __html: heading }}
              ></h2>
            </div>
            <div className={classes.postName}>
              <p>{postName}</p>
              <div className={classes.searchContainer}>
                <div className={classes.searchIcon}>{searchIcon}</div>
              </div>
            </div>{" "}
            <p
              className={classes.label}
              dangerouslySetInnerHTML={{ __html: sendYourCv.label }}
            ></p>{" "}
          </div>{" "}
          <div className={classes.barContainer}>
            <div className={classes.bar}></div>
            <div className={classes.bar}></div>
          </div>
          <div className={classes.sendYourCv}>
            <a href={`mailto:${sendYourCv.email}`} className={classes.email}>
              {sendYourCv.email}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;

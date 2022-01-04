import React from "react";

import htmlImg from "../../assets/SkillsImages/html.png";
import cssImg from "../../assets/SkillsImages/css.png";
import jsImg from "../../assets/SkillsImages/js.png";
import reactjsImg from "../../assets/SkillsImages/reactjs.png";
import materialUIImg from "../../assets/SkillsImages/materialUI.png";
import reduxImg from "../../assets/SkillsImages/redux.png";
import mongoImg from "../../assets/SkillsImages/mongo.png";
import nodeImg from "../../assets/SkillsImages/node.png";
import expressImg from "../../assets/SkillsImages/express.png";
import firebaseImg from "../../assets/SkillsImages/firebase.png";

const SkillsDisplay = () => {
  const SkillsData = [
    {
      img: htmlImg,
      alt: "html",
      height: "11rem",
    },
    {
      img: cssImg,
      alt: "css",
      height: "11rem",
      marginLeft: "45px",
    },
    {
      img: jsImg,
      alt: "js",
      height: "10rem",
      marginLeft: "60px",
    },
    {
      img: reactjsImg,
      alt: "reactjs",
      height: "8rem",
    },
    {
      img: mongoImg,
      alt: "mongo",
      height: "8rem",
    },
    {
      img: nodeImg,
      alt: "node",
      height: "8rem",
    },
    {
      img: expressImg,
      alt: "expressjs",
      height: "8rem",
    },
    {
      img: firebaseImg,
      alt: "firebase",
      height: "8rem",
    },

    {
      img: materialUIImg,
      alt: "materialUI",
      height: "13.2rem",
    },
    {
      img: reduxImg,
      alt: "redux",
      height: "10rem",
    },
  ];

  return (
    <>
      <div className="SkillsContainer bg-white">
        <div className="SC-Slider">
            <div className="SC-Slide">
              {SkillsData.map((preImg, index) => {
                return (
                  <span key={index}>
                    <img
                      src={preImg.img}
                      alt={preImg.alt}
                      style={{ height: preImg.height }}
                    />
                  </span>
                );
              })}
            </div>
            <div className="SC-Slide">
              {SkillsData.map((preImg, index) => {
                return (
                  <span key={index}>
                    <img
                      src={preImg.img}
                      alt={preImg.alt}
                      style={{ height: preImg.height }}
                    />
                  </span>
                );
              })}
            </div>
            <div className="SC-Slide">
              {SkillsData.map((preImg, index) => {
                return (
                  <span key={index}>
                    <img
                      src={preImg.img}
                      alt={preImg.alt}
                      style={{ height: preImg.height }}
                    />
                  </span>
                );
              })}
            </div>
            <div className="SC-Slide">
              {SkillsData.map((preImg, index) => {
                return (
                  <span key={index}>
                    <img
                      src={preImg.img}
                      alt={preImg.alt}
                      style={{ height: preImg.height }}
                    />
                  </span>
                );
              })}
            </div>
        </div>
      </div>
    </>
  );
};

export default SkillsDisplay;

import React from "react";


import homeBg from "../../assets/homebg.png";
import Abstract from "../../assets/Abstract.mp4"

// IMPORTING REACT REVEAL
import Fade from "react-reveal/Fade";


const Home = () => {

  return (
    <>
      <Fade>
        <div id="About" className="HomeContainer">
          <video poster={homeBg} autoPlay loop muted src={Abstract} />
        </div>
      </Fade>
      <div className="AboutUS">
        <div className="text-center">
          <Fade delay={100} right cascade>
            <h1>
              <span style={{ fontWeight: 800, fontSize:"calc(3vh + 3vw)" }}> Salmaan Khan </span>
            </h1>
          </Fade>
          <h3 style={{ fontWeight: 300, fontSize:"calc(1.5vh + 1.5vw)" }}>
            Blockchain and MERN Stack Web Developer-Designer
          </h3>

        </div>
      </div>
    </>
  );
};

export default Home;

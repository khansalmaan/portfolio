import React from "react";


import homeBg from "../../assets/homebg.png";
import Abstract from "../../assets/Abstract.mp4"

// IMPORTING REACT REVEAL
import Fade from "react-reveal/Fade";
import { SiFiverr, SiGithub, SiLinkedin, SiTwitter, SiUpwork } from "react-icons/si";
import { FiMail, FiPhoneCall } from "react-icons/fi";


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

                   <div style={{marginTop:"calc(3vh + 3vw)"}}>
                       <a target="blank" href="https://github.com/SA1MAANKHAN">
                    <SiGithub className="contactIcons " />
                  </a>
                  <a
                    target="blank"
                    href="https://www.linkedin.com/in/salmaan-khan-7694ab1a0/"
                  >
                    <SiLinkedin className="contactIcons ml-3" />
                  </a>
                
                     <a target="blank" href="https://twitter.com/Salmaan65991730">
                    <SiTwitter className="contactIcons ml-3" />
                  </a>
                         <a target="blank" href="https://www.fiverr.com/salmaank9">
                    <SiFiverr className="contactIcons ml-3" />
                  </a>
                          <a target="blank" href="https://www.upwork.com/freelancers/~01ab722c7896fa2129">
                    <SiUpwork className="contactIcons ml-3" />
                  </a>
                                <a href="mailto:leosalmaan5@gmail.com">
                    <FiMail className="contactIcons ml-3" />
                  </a>
                              <a href="tel:918968740348" >
                    <FiPhoneCall className="contactIcons ml-3" />
                  </a>
                </div>

        </div>
      </div>
   
    </>
  );
};

export default Home;

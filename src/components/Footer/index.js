import React from "react";

// MATERIAL CHIP UNDER BRAND NAME IN NAVBAR
import Chip from "@material-ui/core/Chip";

// IMPORTING REACT ICONS
import { SiLinkedin, SiGithub, SiTwitter, SiFiverr, SiUpwork } from "react-icons/si";
import { FiMail, FiPhoneCall} from "react-icons/fi";

import Fade from "react-reveal/Fade";

const Footer = () => {
  return (
    <>
      <Fade delay={100} duration={1000} bottom>
        <div id="Contact" className="container-fluid FooterContainer">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <div className="BrandName">
                  <h1 style={{textDecoration:"none"}}>SALMAAN KHAN</h1>
                  <Chip
                    className="UnderNameNChip"
                    style={{
                      fontSize: "1.5rem",
                      height: "2.5rem",
                      marginTop: ".2rem",
                    }}
                    label="BLOCKCHAIN & MERN DEVELOPER"
                  />
                </div>
                       <div style={{marginTop:"calc(1.5vh + 1.5vw)"}}>
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
          </div>
          <div className="h5 text-center text-white m-5" >
            ©2020 . All rights Reserved
          </div>
        </div>
        <div id="bottomFooter" className="position-fixed bottom-0"></div>
      </Fade>
    </>
  );
};

export default Footer;

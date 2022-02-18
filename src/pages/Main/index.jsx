import React from "react";

import { checkIsTablet, checkIsMobile } from "../../helper";
import SvgComponent from "../../assets/images";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import "./main.scss";

export const Main = () => {
  const isTablet = checkIsTablet(window.innerWidth);
  const isMobile = checkIsMobile(window.innerWidth);

  return (
    <div className="main-wrapper">
      <Header />
      <div className="content">
        <p className="main-text">
          {!isMobile && !isTablet && (
            <>
              the fire that
              <img src="src/assets/images/mainPicture.png" alt="Abstration" />
              we ignite will never blow out
            </>
          )}

          {isTablet && (
            <>
              the fire{" "}
              <img src="src/assets/images/mainPicture.png" alt="Abstration" />{" "}
              that we ignite will never blow out
            </>
          )}

          {isMobile && (
            <>
              the fire that
              <img src="src/assets/images/mainPicture.png" alt="Abstration" />
              we ignite will never blow out
            </>
          )}
        </p>
        <div className="text-block">
          <p className="text">
            FRGMNT.agency lives by the challenge. 360 view, to reveal every
            facet of brand and do not miss no one angle of view. Design means
            much more. if it does have an idea. Look wider to see the truth.
          </p>
        </div>
        <div className="link-block">
          <div className="link">
            <a href="">CORPORATE</a>{" "}
          </div>
          <div className="link">
            {" "}
            <a href="">Funky</a>{" "}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

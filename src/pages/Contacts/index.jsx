import React from "react";

import { checkIsTablet, checkIsMobile } from "../../helper";
import SvgComponent from "../../assets/images";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import "./contacts.scss";

export const Contacts = () => {
  const isTablet = checkIsTablet(window.innerWidth);
  const isMobile = checkIsMobile(window.innerWidth);

  return (
    <div className="contacts-wrapper">
      <Header />
      <div className="main">
        <div className="content">
          <p className="text text--location">
            located in Kyiv thinking worldwide
          </p>
        </div>
        <div className="content">
          {isMobile ? (
            <>
              {" "}
              <h1 className="acticle">to talk about your project</h1>
              <div className="mobile-text-block">
                <p className="text text--phone">
                  Our phone <span>+380 95 176 9312</span>
                </p>
                <p className="text text--degrees">50°27′16.9″N 30°31′25.7″E</p>
              </div>
            </>
          ) : (
            <>
              <p className="text text--phone">
                Our phone <span>+380 95 176 9312</span>
              </p>
              <h1 className="acticle">to talk about your project</h1>
              <p className="text text--degrees">50°27′16.9″N 30°31′25.7″E</p>
            </>
          )}
        </div>
        <div className="content">
          <p className="text">Follow us</p>
        </div>
        <div className="content follow-wrapper">
          <div className="follow-block follow-block-1">
            <a href="">fb</a>
            <SvgComponent.FollowPicture1 />
          </div>
          <div className="follow-block follow-block-2">
            {" "}
            <a href="">inst</a>
            <SvgComponent.FollowPicture2 />
          </div>
          <div className="follow-block follow-block-3">
            {" "}
            <a href="">be</a>
            <SvgComponent.FollowPicture3 />
          </div>
        </div>
      </div>
      <Footer useAdditionalText={isTablet}/>
    </div>
  );
};

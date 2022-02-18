import React from "react";

import { checkIsMobile } from "../../helper";
import SvgComponent from "../../assets/images";
import "./footer.scss";

export const Footer = ({ isBlack = false, useAdditionalText = false, useBottomLine = false }) => {
  const isMobile = checkIsMobile(window.innerWidth);

  return (
    <div className={isBlack ? "footer color--black" : "footer color--white"}>
      <div className="d-flex">
        <SvgComponent.Earth />
        <p className="footer-text">Kyiv [2022]</p>
      </div>
      <div className="d-flex">
        {useAdditionalText && (
          <p className="footer-text footer-text--reserved">
            All rights reserved
          </p>
        )}
        <SvgComponent.FooterPicture />
      </div>

      {isMobile && useBottomLine && <div className="footer-bottom"><SvgComponent.FooterBackgroung /></div>}
    </div>
  );
};

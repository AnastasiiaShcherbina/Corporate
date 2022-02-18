import React from "react";

import { checkIsMobile } from "../../helper";
import SvgComponent from "../../assets/images";
import "./header.scss";

export const Header = ({ isBlack = false }) => {
  const isMobile = checkIsMobile(window.innerWidth);

  return (
    <div className="header">
      {isBlack ? (
        isMobile ? (
          <>
            <SvgComponent.BlackMobileLogo />
            <SvgComponent.BlackMobileMenu />
          </>
        ) : (
          <>
            <SvgComponent.BlackLogo />
            <SvgComponent.BlackMenu />
          </>
        )
      ) : isMobile ? (
        <>
          <SvgComponent.WhiteMobileLogo />
          <SvgComponent.WhiteMobileMenu />
        </>
      ) : (
        <>
          <SvgComponent.WhiteLogo />
          <SvgComponent.WhiteMenu />
        </>
      )}
    </div>
  );
};

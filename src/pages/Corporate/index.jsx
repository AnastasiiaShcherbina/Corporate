import React from "react";

// import { checkIsTablet, checkIsMobile } from "../../helper";
import SvgComponent from "../../assets/images";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import "./corporate.scss";

export const Corporate = () => {
  //   const isTablet = checkIsTablet(window.innerWidth);
  //   const isMobile = checkIsMobile(window.innerWidth);

  return (
    <div className="corporate-wrapper">
      <Header isBlack />
      <div className="main">
        <h1 className="article">
          Work <span>5</span>
        </h1>
        <div className="list">
          <div className="item">
            <div className="item-wrapper">
              <a className="hover-block" href="">
                <span className="view-project">view project</span>
              </a>
              <img
                src="src/assets/images/project-1.png"
                alt="project-picture"
              />
            </div>

            <p className="project-description">
              <span className="project-article">Marokana</span>
              <span className="project-text">
                <span>Restaurant</span>
                <span>2021</span>
              </span>
            </p>
          </div>
          <div className="item">
            <a className="hover-block" href="">
              <span className="view-project">view project</span>
            </a>
            <img src="src/assets/images/project-2.png" alt="project-picture" />
          </div>
          <div className="item">
            <a className="hover-block" href="">
              <span className="view-project">view project</span>
            </a>
            <img src="src/assets/images/project-3.png" alt="project-picture" />
          </div>
          <div className="item">
            <a className="hover-block" href="">
              <span className="view-project">view project</span>
            </a>
            <img src="src/assets/images/project-4.png" alt="project-picture" />
          </div>
          <div className="item">
            <a className="hover-block" href="">
              <span className="view-project">view project</span>
            </a>
            <img src="src/assets/images/project-5.png" alt="project-picture" />
          </div>
          <div className="item"></div>
        </div>
        <div className="form-block">
          <div>
            <h3 className="form-article">
              Contact us <span className="star">*</span>
            </h3>
            <p className="form-text">
              *Если у вас пропал дар речи - не звоните, лучше напишите!
            </p>
            <div className="form">
              <input type="text" name="name" placeholder="Name" />
              <div className="d-flex">
                <input type="email" name="email" placeholder="E-mail" />
                <input
                  type="text"
                  name="contacts"
                  placeholder="Phone / Messenger"
                />
              </div>
              <textarea
                type="text"
                name="description"
                className="form-description"
                placeholder="Smth about your project"
              />
            </div>
          </div>
          <div className="form-block-right">
            <p className="comment">
              {"      "}FRGMNT is an agency that builds brands from every
              angle.Today, tomorrow and years from now.
            </p>
            <button className="submit-button">
              Send
              <SvgComponent.Nudes />
            </button>
          </div>
        </div>
        <Footer isBlack />
      </div>
    </div>
  );
};

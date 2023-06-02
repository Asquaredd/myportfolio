import React from 'react';
import { HiOutlineDesktopComputer, HiOutlineTerminal, HiOutlineSparkles, HiOutlineAcademicCap, HiOutlineGlobeAlt, HiOutlineTranslate } from "react-icons/hi";


const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <HiOutlineDesktopComputer className="about__icon" />
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">3 Years</span>
        </div>
        <div className="about__box">
            <HiOutlineTerminal className="about__icon" />
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">25+ Projects</span>
        </div>
        <div className="about__box">
            <HiOutlineAcademicCap className="about__icon" />
            <h3 className="about__title">Up-To-Date</h3>
            <span className="about__subtitle">Constantly Improving</span>
        </div>
        <div className="about__box">
            <HiOutlineTranslate className="about__icon" />
            <h3 className="about__title">Multilingual</h3>
            <span className="about__subtitle">Easy communcation</span>
        </div>
        <div className="about__box">
            <HiOutlineGlobeAlt className="about__icon" />
            <h3 className="about__title">Globab</h3>
            <span className="about__subtitle">Easy Collaboration</span>
        </div>
        <div className="about__box">
            <HiOutlineSparkles className="about__icon" />
            <h3 className="about__title">Support</h3>
            <span className="about__subtitle">Online 24/7</span>
        </div>
    </div>
  );
}

export default Info;
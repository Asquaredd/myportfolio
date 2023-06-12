import React from "react";
import { FiTwitter, FiGithub, FiLinkedin, FiInstagram} from "react-icons/fi";

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://www.instagram.com/aplus_sparky/" className="home__social-icon" target="_blank">
                <FiInstagram />
            </a>
            <a href="https://github.com/Asquaredd" className="home__social-icon" target="_blank">
                <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/aman-adhikari" className="home__social-icon" target="_blank">
                <FiLinkedin />
            </a>
        </div> 
    ); 
}

export default Social;
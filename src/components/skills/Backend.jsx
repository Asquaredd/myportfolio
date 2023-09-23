import React from "react";
import { HiCheckBadge } from "react-icons/hi2";
import SVGIcon from './SVGIcon';

const Backend = () => {
    return(
        <div className="skills__content">
        <h3 className="skills__title">Backend Developer</h3>
        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <SVGIcon name="Java" />
                    <div>
                        <h3 className="skills__name">Java</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
                <div className="skills__data">
                    <SVGIcon name="Csharp" />
                    <div>
                        <h3 className="skills__name">C#/.NET</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                <div className="skills__data">
                    <SVGIcon name="sql" />
                    <div>
                        <h3 className="skills__name">MySQL</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
            </div>
            <div className="skills__group">
                <div className="skills__data">
                    <SVGIcon name="npm" />  
                    <div>
                        <h3 className="skills__name">npm</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                <div className="skills__data">
                    <SVGIcon name="node" />
                    <div>
                        <h3 className="skills__name">Node.js</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                <div className="skills__data">
                    <SVGIcon name="git" />
                    <div>
                        <h3 className="skills__name">Git</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Backend;
import React from "react";
import { FaCss3Alt } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';
import { FaBootstrap } from 'react-icons/fa';
import { DiJavascript } from 'react-icons/di';
import { SiJquery } from 'react-icons/si';
import { GrReactjs } from 'react-icons/gr';


function Skills(){
    return(
        <div className="skills">
            <h2>Skills/Tools</h2>
                <div className="mySkills">   
                    <ul>
                        <li><FaHtml5 className="iconHtml" />HTML</li>
                        <li><FaCss3Alt className="iconCss" />CSS</li>
                        <li><FaBootstrap className="iconBootstrap" />Bootstrap</li>
                    </ul>
                    <ul>
                        <li><DiJavascript className="iconJavascript" />JavaScript</li>
                        <li><SiJquery className="iconJquery" /> jQuery</li>
                        <li><GrReactjs className="iconReact" /> React JS</li>
                    </ul>
                </div>
        </div>
    )
}

export default Skills;
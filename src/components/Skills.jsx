import React from "react";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiCocoapods } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { GrSwift } from "react-icons/gr";
import { GrReactjs } from "react-icons/gr";
import { SiFirebase } from "react-icons/si";
import { SiRealm } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";




function Skills() {
  return (
    <div className="skills">
      <h2>Skills/Tools</h2>
      <div className="mySkills">
        <ul>
        <li>
            <GrSwift className="iconSwift" /> Swift
          </li>
          <li>
            <SiFirebase className="iconFirebase" />
            Firebase
          </li>
          <li>
            <SiCocoapods className="iconCocoapods" />
            Cocoapods
          </li>
        </ul>
        <ul>
        <li>
            <GrReactjs className="iconReact" /> React JS
          </li>
          <li>
            <DiJavascript className="iconJavascript" />
            JavaScript
          </li>
          <li>
            <SiRealm className="iconRealm" /> RealmSwift
          </li>
        </ul>
        <ul>
          <li>
            <FaHtml5 className="iconHtml" />
            HTML
          </li>
          <li>
            <FaCss3Alt className="iconCss" />
            CSS
          </li>
          <li>
            <VscGithub className="iconGithub" /> Git/Github
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;

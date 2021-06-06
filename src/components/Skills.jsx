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
            <GrSwift className="iconSwift skIcon" /> Swift
          </li>
          <li>
            <SiFirebase className="iconFirebase skIcon" />
            Firebase
          </li>
          <li>
            <SiCocoapods className="iconCocoapods skIcon" />
            Cocoapods
          </li>
        </ul>
        <ul>
        <li>
            <SiRealm className="iconRealm skIcon" /> Realm
          </li>
          <li>
            <DiJavascript className="iconJavascript skIcon" />
            JavaScript
          </li>
          <li>
            <GrReactjs className="iconReact skIcon" /> React JS
          </li>
        </ul>
        <ul>
          <li>
            <FaHtml5 className="iconHtml skIcon" />
            HTML
          </li>
          <li>
            <FaCss3Alt className="iconCss skIcon" />
            CSS
          </li>
          <li>
            <VscGithub className="iconGithub skIcon" /> Git/Github
          </li>
        </ul>
      </div>
      <div id="projects" />
    </div>
  );
}

export default Skills;

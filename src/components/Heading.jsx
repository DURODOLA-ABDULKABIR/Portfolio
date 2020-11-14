import React from "react";
import Introduction from "./Introduction";
import Introduction2 from "./Introduction2";

function Heading(){
    return(
        <div>
            <div className="intro1">
                <div className="intro2" >
                <Introduction />
                    <div>
                        <img src={require("./head.png")} alt="" className="introImage" />
                    </div>
                    <div id="about"/>
                </div >
                <Introduction2 />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 65"><path fill= "rgb(241, 238, 238)" fillOpacity="1" d="M0,0L80,16C160,32,320,64,480,64C640,64,800,32,960,16C1120,0,1280,0,1360,0L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            </div>
        </div>
    )
};
export default Heading;
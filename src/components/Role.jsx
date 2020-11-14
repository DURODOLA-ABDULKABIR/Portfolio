import React from "react";

function Role(){
    return(
        <div className="role">
                <h2>I'm available for:</h2>
                <hr className="line" />
                <div id="contact"/>
                <p><span role="img" aria-label="pointer">👉</span> Front end role (Onsite)</p>
                <p><span role="img" aria-label="pointer">👉</span> Front end role (Remote)</p>
                <p><span role="img" aria-label="pointer">👉</span> Freelance job</p>
                <a href="https://twitter.com/messages/compose?recipient_id=4218297735&text=Hi"
                    class="twitter-dm-button" data-screen-name="@durodola_" target="_blank" rel="noopener noreferrer"><img src={require("./twitterdm.png")} alt=""/></a>
            </div>
    )
}

export default Role;
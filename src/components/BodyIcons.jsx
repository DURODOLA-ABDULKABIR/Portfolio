import React from "react";
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';


function BodyIcons(){
    let iconStyle = {
        fontSize: "30px"
    };
    return(
            <div className="contactItems">
                <ul>
                    <li><a href="https://mail.google.com/mail/u/durodolaabdulkabir@gmail.com" target="_blank" rel="noopener noreferrer"><EmailIcon style = {iconStyle} /></a></li>
                    <li><a href="https://www.linkedin.com/in/abdulkabir-durodola-30045b195" target="_blank" rel="noopener noreferrer"><LinkedInIcon style = {iconStyle} /></a></li>
                    <li><a href="https://wa.link/2flo0a" target="_blank" rel="noopener noreferrer"><WhatsAppIcon style = {iconStyle} /></a></li>
                    <li><a href="https://twitter.com/messages/compose?recipient_id=4218297735&text=Hi"
                    class="twitter-dm-button" data-screen-name="@durodola_" target="_blank" rel="noopener noreferrer"><TwitterIcon style = {iconStyle} /></a></li>
                    <li><a href="https://github.com/DURODOLA-ABDULKABIR" target="_blank" rel="noopener noreferrer"><GitHubIcon style = {iconStyle} /></a></li>
                </ul>
            </div>
    )
}

export default BodyIcons;
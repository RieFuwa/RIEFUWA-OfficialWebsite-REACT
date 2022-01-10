import "./Styles.css";
import React from 'react'
import { ImLinkedin,ImGithub,ImTwitter,ImInstagram,ImMail } from "react-icons/im";


function Share() {
 
    
    return (
        <div className="share">
                <a href="https://www.linkedin.com/in/bkabatas/" target="_blank" rel="noreferrer"><ImLinkedin className="sharea"   /></a>&ensp;
                <a href="https://github.com/RieFuwa" target="_blank" rel="noreferrer"><ImGithub className="sharea"    /></a>&ensp;
                <a href="https://twitter.com/RieFuwa_" target="_blank" rel="noreferrer"><ImTwitter className="sharea"   /></a>&ensp;
                <a href="https://www.instagram.com/bedirhankbts/" target="_blank" rel="noreferrer"><ImInstagram className="sharea"    /></a>&ensp;
                <a href="mailto:bedirhankabatas1@gmail.com" target="_blank" rel="noreferrer"><ImMail className="sharea"   /></a>
        </div>
    )
}

 export default React.memo(Share)
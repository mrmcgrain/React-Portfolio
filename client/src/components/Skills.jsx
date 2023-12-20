import "./CSS/Skills.css"
import socket from "./assests/icons/socket.png"
import bcrypt from './assests/icons/bcrypr.jpeg'
import code from './assests/icons/code2.png'
import express from './assests/icons/express.png'
import gsuite from './assests/icons/g-suite.png'
import html from './assests/icons/html.png'
import JWT from './assests/icons/JWT.png'
import mongoDB from './assests/icons/mongoDB.png'
import node from './assests/icons/nodejs.png'
import scrum from './assests/icons/scrum.png'
import react from './assests/icons/react.png'
import JS from './assests/icons/java-script.png'

<div
class="grid-item-skill"
style={{ backgroundImage: `url(${scrum})` }}
>
</div>
function Skills() {

    return (
        <div id="Skills">
            <h3>Skills</h3>
            {/* {console.log("WTF", scrum)} */}
            <div class="grid-container-skill">
            
                <div
                    class="grid-item-skill"
                    style={{ backgroundImage: `url(${JS})` }}
                >
                </div>
                <div
                    class="grid-item-skill"
                    style={{ backgroundImage: `url(${react})` }}
                >
                </div>
                <div
                    class="grid-item-skill"
                    style={{ backgroundImage: `url(${express})` }}
                >
                </div>
            
                <div
                    class="grid-item-skill"
                    style={{ backgroundImage: `url(${socket})` }}
                >
                </div>
            
                <div
                    class="grid-item-skill"
                    style={{ backgroundImage: `url(${scrum})` }}
                >
                </div>
                <div
                    class="grid-item-skill"
                    style={{ backgroundImage: `url(${bcrypt})` }}
                >
                </div>
            
                <div
                    class="grid-item-skill"
                    style={{ backgroundImage: `url(${html})` }}
                >
                </div>
            
                <div
                    class="grid-item-skill"
                    style={{ backgroundImage: `url(${JWT})` }}
                >
                </div>
            
                <div
                    class="grid-item-skill"
                    style={{ backgroundImage: `url(${mongoDB})` }}
                >
                </div>
            
                <div
                    class="grid-item-skill"
                    style={{ backgroundImage: `url(${node})` }}
                >
                </div>
                <div
                    class="grid-item-skill"
                    style={{ backgroundImage: `url(${gsuite})` }}
                >
                </div>






            </div>
        </div>

    );
}

export default Skills;
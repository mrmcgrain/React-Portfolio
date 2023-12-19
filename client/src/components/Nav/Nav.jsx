import './nav.css'
import email from "./assests/email.png"
import github from "./assests/github.png"
import linkedin from "./assests/linkedin.png"
import resume from "./assests/resume.png"

import { Link } from 'react-router'

function Nav() {



    return (
        <div id="Nav">

            <div id="Name" className='flex-center f-col'>
                <h1>Michael McGrain</h1>
                <h3>Jr. Full Stack Web Developer</h3>
                <h3>Software Engineer</h3>
                <h4>MERN Stack</h4>
            </div>

            <br />
            <br />
            <br />
            <br />

            <div id="ContactCard">
                <div id="ContactCardContent" 
                // className='border'
                >

                    <div id="email" className='flex f-row'>
                        <div className="flex" style={{ justifyContent: "center" }}>
                            <img className="thumbnails" src={email}></img>
                        </div>

                        <div className='flex-center' style={{ marginLeft: "20px" }}
                            onClick={(e) => { window.location.href = 'mailto:michael.r.mcgrain@gmail.com'; }}>
                            michael.r.mcgrain@gmail.com
                        </div>

                    </div>

                    <div id="spacer"></div>

                    <div id="linkedIn" className='flex f-row '>
                        <div className="flex" style={{ justifyContent: "center" }}>
                            <img className="thumbnails" src={linkedin}></img>
                        </div>

                        <div className='flex-center' style={{ marginLeft: "20px" }}>
                            <a href="https://www.linkedin.com/in/michael-mcgrain-780b282a3/">Linked In</a>
                        </div>

                    </div>


                    <div id="spacer"></div>

                    <div id="linkedIn" className='flex f-row '>
                        <div className="flex" style={{ justifyContent: "center" }}>
                            <img className="thumbnails" src={github}></img>
                        </div>

                        <div className='flex-center' style={{ marginLeft: "20px" }}>
                            <a href="https://github.com/mrmcgrain">GitHub</a>
                        </div>

                    </div>

                    <div id="spacer" ></div>

                    <div id="linkedIn" className='flex f-row '>
                        <div className="flex" style={{ justifyContent: "center" }}>
                            <img className="thumbnails" src={resume}></img>
                        </div>

                        <div className='flex-center' style={{ marginLeft: "20px" }}>
                            <a href="">download resume</a>
                        </div>

                    </div>

                    <div id="spacer" style={{ height: "60px" }}></div>

                    <div style={{textAlign: "center"}} > &lt; send a message /&gt;</div>

                </div>





            </div>


        </div>

    )
}


export default Nav
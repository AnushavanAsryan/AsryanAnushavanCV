import React from "react";
import "../css/Work.css"
const Work = () => {
    return(
        <div className="work">
            <h2 className="workExperience">WORK EXPERIENCE</h2>
            <hr className="workExperienceHr"/>
            <div>
                <h3>Ybm_Deutschland</h3>
                <p className="datumWorkFarzoom">03/2017 - 01/2018 </p>
                <p className="skillName">Front_End Developer</p>
                <ol>
                    <li>Web Development</li><br />
                    <li>Website development from scratch</li><br />
                    <li>Development of sites from ready-made layouts</li><br />
                    <li>The languages I used HTML, CSS, HTML5, CSS3, Bootstrap, JS</li><br />
                    <li>Services I have used React JS</li><br />
                </ol>
            </div>
            <div>
            <h3>Webmedia39 </h3>
                <p className="datumWorkGovernment">05/2019 - 03/2023</p>
                <p className="skillNameGovernment">Front_End Developer</p>
                <ol>
                    <li>Web Development</li><br />
                    <li>Website development from scratch</li><br />
                    <li>Designing layouts with Figma</li><br />
                    <li>Development of sites from ready-made layouts</li><br />
                    <li>The languages I used HTML, CSS, HTML5, CSS3, Bootstrap, JS, Figma</li><br />
                    <li>Services I have used React JS</li><br />
                </ol>
            </div>
        </div>

    )
}
export default Work
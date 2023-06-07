import React from "react";
import "../css/Skills.css"
const Skills = () => {
    return(
        <div className="skills">
            <h2 className="skillsH3">SKILLS</h2>
            <hr className="skillsHr"/>
            <div>
                <h3 className="software">Software</h3>
                <p className="softwareName">HTML, CSS, HTML5, CSS3, Bootstrap, JS, React, Git, Figma
                </p>
            </div>
            <div>
                <h3 className="Organisational">Organisational / managerial skills</h3>
                <p className="Leadership">Leadership, Management, Mentoring, Planning,
                Politeness, Positivity
                </p>
            </div>
            <div>
                <h3 className="communication">Communication skills</h3>
                <p className="confidence">Confidence, Flexibility</p>
            </div>
        </div>
    )
}
export default Skills
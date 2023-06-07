import React from "react";
import "../css/Language.css"
const Language = () => {
    return(
        <div className="language">
            <h2 className="languageH3">Language skills</h2>
            <hr className="languageHr"/>
            <div>
                <h3 className="Armenian">Armenian</h3>
                <p className="nativeA">Native</p>
            </div>
            <div>
                <h3 className="Russian">Russian</h3>
                <p className="nativeR">Native</p>
            </div>
            <div>
                <h3 className="English">English</h3>
                <p className="b2E">A2 </p>
            </div>
        </div>
    )
}
export default Language
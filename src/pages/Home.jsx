import React from "react";
import Header from "../components/Header"
import Summary from "../components/Summary"
import Education from "../components/Education"
import Certifications from "../components/Certifications"
import Skills from "../components/Skills"
import Language from "../components/Language"
import Work from "../components/Work"
const Home = () => {
    return (
      <div>
          <Header/>
          <Summary/>
          <Education/>
          <Certifications/>
          <Skills/>
          <Language/>
          <Work/>
      </div>
    )
  }

  export default Home
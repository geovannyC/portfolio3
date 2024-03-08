import React from "react";
import styles from "./index.module.scss";
import Principal from "./principal";
import Projects from "./projects";
import Skills from "./skills";
import Contact from "./contact";
import PrincipalSkill from "./principalSkills";

const Home = () => {
  return <div className={styles.container}>
    <Principal />
    <PrincipalSkill />
    <Projects />
    <Skills />
    <Contact />
  </div>;
};

export default Home;

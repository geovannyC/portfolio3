import React from 'react'
import Fade from '@/app/components/ui/fade';

import ProjectsComponent from "../../components/containers/projects";

import styles from "./index.module.scss";

const Projects = () => {
  return (
    <div id='projects' className={styles.generalContainerCenter}>
      <Fade way='left'>
        <h2>Projects</h2>
      </Fade>
      <ProjectsComponent/>
    </div>
  )
}

export default Projects
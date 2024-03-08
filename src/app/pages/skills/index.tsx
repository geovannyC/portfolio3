import React from 'react'

import Fade from '@/app/components/ui/fade';
import SkillsRange from '@/app/components/containers/skillsRange';

import styles from "./index.module.scss";

const Skills = () => {
  return (
    <div className={styles.generalContainerCenter}>
      <Fade way='left' >
        <h2>Skills</h2>
      </Fade>
      <div className={styles.containerSkills}>
          <div className={styles.content}>
            <SkillsRange />
          </div>
      </div>
    </div>
  )
}

export default Skills
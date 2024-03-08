import React from 'react'
import Fade from '@/app/components/ui/fade';
import PrincipalSkillContainer from '../../components/containers/principalSkills';

import styles from "./index.module.scss";

const PrincipalSkill = () => {
  return (
    <div id='principalSkills' className={styles.generalContainerCenter}>
      <Fade way='left' >
        <h2>Principal Skills</h2>
      </Fade>
      <PrincipalSkillContainer />
    </div >
  )
}

export default PrincipalSkill
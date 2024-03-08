import React from 'react'
import { useAppSelector } from '@/redux/hooks';

import Skills from '../skills';

import styles from "./index.module.scss";

const PrincipalSkill = () => {
  const skillsData = useAppSelector((state) => state.appReducer.principalSkills);
  return (
    <div className={styles.gridContainer}>
      {skillsData.map(skill => <Skills key={skill.id} id={skill.id} resume={skill.resume} title={skill.title} />)}
    </div>
  )
}

export default PrincipalSkill
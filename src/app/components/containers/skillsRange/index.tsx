import React from 'react'

import { useAppSelector } from '@/redux/hooks';

import RangeCircle from "../../ui/rangeCircle";
import styles from "./index.module.scss";

const SkillsRange = () => {
  const skillsData = useAppSelector((state) => state.appReducer.skills);
  return (
    <div className={styles.containerSkill}>
      {skillsData.map((skill, index) =>
        <div className={styles.skill} key={skill.id}>
          <p>{skill.skill}</p>
          <div className={styles.containerSkillRange}>
            <RangeCircle percent={skill.percent} index={index} />
          </div>
        </div>
      )}
    </div>
  )
}

export default SkillsRange
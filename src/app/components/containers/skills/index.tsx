import React from 'react'
import { PrincipalSkillsProps } from '@/schemmas/appSchemmas';

import Card from '../../ui/card';
import styles from "./index.module.scss";

const Skills = (data: PrincipalSkillsProps) => {
  return (
    <Card>
      <div className={styles.containerSkill}>
        <h4>{data.title}</h4>
        <p>
          {data.resume}
        </p>
      </div>
    </Card>
  )
}

export default Skills
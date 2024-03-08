import React from 'react'

import { FadeProps } from '@/schemmas/appSchemmas';

import styles from "./index.module.scss";

const Fade = ({ children, way }: FadeProps) => {
  return (
      <div className={`${styles.containerStamp} ${styles[way]}`}>
        {children}
      </div>
  )
}

export default Fade
import React from 'react'

import Fade from '../fade';

import styles from "./index.module.scss";

const Card = ({ children }:any) => {
  return (
    <Fade way="down">
      <div className={styles.containerCard}>
        {children}
      </div>
    </Fade>
  )
}

export default Card
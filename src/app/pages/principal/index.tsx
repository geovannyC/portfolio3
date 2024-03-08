import React from 'react'
import Social from '@/app/components/containers/social';
import Welcomer from '@/app/components/ui/welcomer';

import styles from "./index.module.scss";

const Principal = () => {
  return (
    <div className={styles.containerPrincipal}>
      <div className={styles.picture}>
        <h1>Welcome to my portfolio</h1>
      </div>
      <Welcomer />
      <Social />
    </div>
  )
}

export default Principal
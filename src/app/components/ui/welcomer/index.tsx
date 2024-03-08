import React from 'react'
import Fade from '../fade';

import styles from "./index.module.scss";

const Welcomer = () => {
    return (
        <div className={styles.generalContainerCenter}>
            <Fade way='startDown' >
                <h1>I'm Geovanny</h1>
                <h2>Software Developer</h2>
            </Fade>
        </div>
    )
}

export default Welcomer
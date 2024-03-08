import React from 'react'

import { useAppSelector } from '@/redux/hooks';

import Icon from '../../ui/icon';
import Fade from '../../ui/fade';
import styles from "./index.module.scss";

const Social = () => {
    const socialsData = useAppSelector((state) => state.appReducer.social);
    return (

        <div className={styles.social}>
            {socialsData.map(social =>
                <div className={styles.alignSocial} key={social.id}>
                    <Fade way='startLeft'>
                        <Icon id={social.id} hover icon={social.icon} link={social.link} text={social.text} />
                    </Fade>
                </div>
            )}
        </div>
    )
}

export default Social
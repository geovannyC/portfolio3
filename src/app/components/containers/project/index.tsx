import React from 'react'
import { ProjectProps } from '@/schemmas/appSchemmas';
import Fade from '@/app/components/ui/fade';
import Image from 'next/image';

import Card from '../../ui/card';
import styles from "./index.module.scss";
import Icon from '../../ui/icon';

const Project = ({ id, image, resume, title, link }: ProjectProps) => {
  const imageLoader = ({ src }: { src: string }) => {
    return `https://i.postimg.cc/${src}`;
  };
  return (
    <div className={styles.containerProject}>
      <div className={styles.content}>
        <Fade way='left'>
          <Image src={image} loader={imageLoader} alt='project' width={800} height={300}
            loading="lazy" className={styles.image} quality={100} />
        </Fade>
        <Card>
          <div className={styles.generalContainerCenter}>
            <h4>{title}</h4>
            <p>{resume}</p>
            {link && <div className={styles.icon}>
              <Icon icon={{
                id: 1,
                library: "boxicons-regular",
                tag: "ChevronUp"
              }}
                id={id}
                link={link}
              />
            </div>}

          </div>
        </Card>
      </div>
    </div>
  )
}

export default Project
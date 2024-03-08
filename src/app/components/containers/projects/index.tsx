import React from 'react'
import { useAppSelector } from '@/redux/hooks';

import Project from '@/app/components/containers/project';

import styles from "./index.module.scss";

const Projects = () => {
  const projectsData = useAppSelector((state) => state.appReducer.projects);

  return (
    <div className={styles.projectContainer}>
      {projectsData.map(e =>
        <div className={styles.gridContainer} key={e.id}>
          <Project image={e.image} resume={e.resume} title={e.title} id={e.id} link={e.link} />
        </div>
      )}
    </div>
  )
}

export default Projects
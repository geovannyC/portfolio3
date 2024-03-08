import React, { useEffect } from 'react'
import styles from "./index.module.scss";

const RangeCircle = ({ percent, index }: any) => {

  useEffect(() => {
    let keyframes =
      `@keyframes counter${index} {
      from {
        --num: 0;
      }

      to {
        --num: ${percent};
      }
    }`;
    let styleSheet = document.styleSheets[0]
    percent && styleSheet.insertRule(keyframes, styleSheet.cssRules.length);;
  }, [percent, index]);

  let style = {
    animation: `counter${index} 1s ease-out forwards`,
    animationTimeline: "view()",
    animationRange: "entry 10% cover 50%",
  };
  return (
    <div className={styles.containerCircle}>
      <svg viewBox="0 0 36 36" className={`${styles.circularChart} ${styles.orange}`}>
        <path className={styles.circleBg}
          d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path className={styles.circle}
          stroke-dasharray={`${percent}, 100`}
          d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>
      <div className={styles.percentage} style={style}></div>
    </div>
  )
}

export default RangeCircle
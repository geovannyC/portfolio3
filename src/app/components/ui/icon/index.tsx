import React from "react";
import { ContactProps } from "@/schemmas/appSchemmas";

import DinamicIcons from "../dinamicIcons";

import styles from "./index.module.scss";

const Icon = ({ id, icon, link, text, hover }: ContactProps) =>
    <span
        key={id}
        onClick={() => {
            link && window.open(link)
        }}
        style={{ cursor: link && "pointer" }}
        className={styles.icon}
    >
        <DinamicIcons library={icon?.library} tag={icon?.tag} />
        {hover && <div className={styles.tag}><sup>{text}</sup></div>}
    </span>

export default Icon;
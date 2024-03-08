"use client";
import React from "react";
import Page from "./pages";


import styles from "./index.module.scss";
import "../../styles/globals.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Page />
    </div>
  );
}

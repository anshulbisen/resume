import React from 'react';
import styles from './Page.module.css'
import SideBar from "../SideBar/SideBar";
import MainContent from "../MainContent/MainContent";

function Page() {
  return (
    <div className={styles.container}>
      <SideBar/>
      <MainContent/>
    </div>
  );
}

export default Page;

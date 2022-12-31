import React from 'react'
import Head from 'next/head'
import styles from "../../styles/Home.module.scss"

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
       <div className={styles.aboutWrapper}>
        <div className={styles.content}>
          <div className={styles.pageHeading}>
            <h1>About</h1>
          </div>
          {/* <div className={styles.tileGrid}>
            <div className={styles.tileOne}>
              <h2>Hi, I'm Peter</h2>
            </div>
            <div className={styles.tileTwo}></div>
            <div className={styles.tileThree}></div>
          </div> */}
        </div>
       </div>
    </>
  )
}

import React from 'react'
import styles from "../styles/Home.module.scss"

export default function HeaderText() {
    return (
        <>
            <div className={styles.landingTagline}>
                <h1 className={styles.textUpper}>CREATIVE DESIGN ONLINE</h1>
                <h1 className={styles.textGradient}>CREATIVE DESIGN ONLINE</h1>
                <HeaderText />
                {/* <h1 className={styles.textUpperGradient}>CREATIVE DESIGN<br />ONLINE</h1> */}
                {/* <h1 className={styles.textUnder}>Creative Design Online</h1> */}
            </div>
        </>
    )
}

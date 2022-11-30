import React from 'react'
import styles from "../styles/Home.module.scss"
import Image from 'next/image';


export default function Landing({ landingImg }) {
    return (
        <>
            <div className={styles.background} style={{ backgroundImage: `url(${'https:' + landingImg[0].fields.image.fields.file.url})` }}></div>
            <div className={styles.landingWrapper} >
                <div className={styles.landingTagline}>
                    <h1 className={styles.textUpper}>CREATIVE DESIGN<br />ONLINE</h1>
                    <h1 className={styles.textGradient}>CREATIVE DESIGN<br />ONLINE</h1>
                    {/* <h1 className={styles.textUpperGradient}>CREATIVE DESIGN<br />ONLINE</h1> */}
                    {/* <h1 className={styles.textUnder}>Creative Design Online</h1> */}
                </div>
            </div>
        </>

    )
}

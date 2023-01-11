import React from 'react'
import styles from "../styles/Home.module.scss"
import Image from 'next/image';
import { useState } from 'react';
import LandingHoverText from './LandingHoverText';
import 'animate.css';


export default function Landing({ landingImg }) {

    const [mobileClick, setMobileClick] =useState(false);

    const handleMobileClick = () => {
        setMobileClick(!mobileClick)
    }

    console.log(mobileClick)

    return (
        <>
            {/* <div className={styles.background} style={{ backgroundImage: `url(${'https:' + landingImg[0].fields.image.fields.file.url})` }}></div> */}
            <div className={styles.background}></div>
            <div className={styles.landingWrapper} onMouseEnter={(e) => handleMobileClick}>
                <div className={styles.landingTagline}>
                    <div className='animate__animated animate__zoomIn'>
                        <LandingHoverText link="/" text="Creative" textHover="Home"/>
                        <LandingHoverText link="/projects" text="Design" textHover="Projects" />
                        <LandingHoverText link="/about" text="Online." textHover="About."/>
                    </div>
                </div>
            </div>
        </>

    )
}

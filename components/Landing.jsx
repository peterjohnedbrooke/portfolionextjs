import React from 'react'
import styles from "../styles/Home.module.scss"
import Image from 'next/image';
import { useState } from 'react';
import LandingHoverText from './LandingHoverText';
import 'animate.css';


export default function Landing({ landingImg }) {

    const [hoverText, setHoverText] =useState(false);

    const handleHoverText = () => {
        setHoverText(!hoverText)
    }

    return (
        <>
            {/* <div className={styles.background} style={{ backgroundImage: `url(${'https:' + landingImg[0].fields.image.fields.file.url})` }}></div> */}
            <div className={styles.background}></div>
            <div className={styles.landingWrapper} >
                <div className={styles.landingTagline}>
                    <div className='animate__animated animate__zoomIn'>
                        <LandingHoverText link="/" text="Creative" textHover="Home"/>
                        <LandingHoverText link="/projects" text="Design" textHover="Projects" />
                        <LandingHoverText link="/about" text="Online." textHover="About." />
                    </div>
                </div>
            </div>
        </>

    )
}

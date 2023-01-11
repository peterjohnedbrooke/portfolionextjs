import Link from 'next/link'
import React from 'react'
import { useState } from 'react';
import styles from "../styles/Home.module.scss"

export default function LandingHoverText({text, link, textHover}) {

    const [hoverText, setHoverText] =useState(false);

    const handleHoverText = () => {
    setHoverText(!hoverText)
    }

  return (
    <Link href={link}>
        {text == "Design" || text == "Projects" ?
            <h2 onMouseEnter={(e) => handleHoverText()} onMouseLeave={(e) => handleHoverText()} className={text == "Online." ? `${styles.pinkText}` : null}>{!!hoverText ? textHover : text}</h2>
            :
            <h1 onMouseEnter={(e) => handleHoverText()} onMouseLeave={(e) => handleHoverText()} className={text == "Online." ? `${styles.pinkText}` : null}>{!!hoverText ? textHover : text}</h1>
        }
    </Link>
  )
}

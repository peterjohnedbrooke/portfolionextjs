import React from 'react'
import styles from "../styles/Home.module.scss"
import Image from 'next/image';
import Link from 'next/link';
import Hamburger from 'hamburger-react';
import { useState, useEffect } from 'react'

// const myLoader = ({ src }) => {
//     return `${URL}${src}`
// }
// const myLoader = ({ src }) => {
//     return `http://localhost:1337${src}`;
// }

export default function NavBar({ logos }) {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click)
        setOpen(!isOpen)
    }

    const handleExit = (e) => {
        setClick(!click)
        setOpen(false);
        // setChangePage(true);
    }

    const [isOpen, setOpen] = useState(false);
    const [navColor, setNavColor] = useState(false);
    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 90) {
                setNavColor(true)
            } else {
                setNavColor(false)
            }
        }
        window.addEventListener('scroll', changeColor)
    }, [])

    return (
        <div className={navColor ? `${styles.navWrapperScroll} ` : `${styles.navWrapper} `}>
            {/* <div className={click || navColor ? styles.logoContainerMove : styles.logoContainer}>
                <div className={styles.logoWrapper}>
                    <Link href="/">
                        <Image loader={myLoader} alt="landingLogo" height="45" width="45" src={logoUrl} />
                    </Link>
                </div>
            </div> */}
            <div className={click || navColor ? styles.brandMove : styles.brand}><h5>PJE Web Dev</h5></div>
            <div className={styles.navContainer}>
                <div className={!!click ? `${styles.burgerIconCross} ` : `${styles.burgerIcon} `} onClick={handleClick}>
                    <Hamburger size={25} className={styles.burgerInner} toggled={isOpen} rounded toggle={setOpen} />
                </div>
            </div>
            <div className={click ? `${styles.navMenuActive} ` : `${styles.navMenuHidden} `}>
                <div className={styles.bg}></div>
                {/* <div className={styles.brand}>
                    <div className={styles.logo}></div>
                    <h5>Iconiks</h5>
                </div> */}
                <ul className={click ? `${styles.listActive} ` : `${styles.listHidden} `}>
                    <li>
                        <Link href="/" onClick={handleExit}>Home</Link>
                    </li>
                    {/* <li>
                        <Link href="/work" onClick={handleExit}>Work</Link>
                    </li> */}
                    <li>
                        <Link href="/projects" onClick={handleExit}>Projects</Link>
                    </li>
                    <li>
                        <Link href="/about" onClick={handleExit}>About</Link>
                    </li>
                    {/* <li>
                        <Link href="gallery" onClick={handleExit}>Gallery</Link>
                    </li> */}
                    <li>
                        <Link href="contact" onClick={handleExit}>Contact</Link>
                    </li>
                </ul>
                <ul className={styles.iconsList}>
                    <li><i className={`bi bi-linkedin ${styles.iconOne} `}></i></li>
                    <li><i className={`bi bi-instagram ${styles.iconTwo} `}></i></li>
                    <li><i className={`bi bi-envelope ${styles.iconThree} `}></i></li>
                </ul>
            </div>
        </div>
    )
}
import React from 'react'
import styles from "../styles/Home.module.scss"
import Card from 'react-bootstrap/Card'
import Link from 'next/link'

export default function ProjectCard({ project }) {
    const { title, slug, image, content, link } = project.fields
    return (
        <div className={styles.card}>
            <div className={styles.areaOne}> 
                <h1>{project.fields.title}</h1>
                <img className={styles.image} src={'https:' + image[0].fields.file.url} />
            </div>
            <div className={styles.areaTwo}>
                
                <p>{project.fields.content}</p>
                <Link href={link} target="_blank" rel="noopener noreferrer">
                    <h1>View</h1>
                </Link>
            </div>
        </div>
    )
}

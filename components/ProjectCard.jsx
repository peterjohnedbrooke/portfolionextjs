import React from 'react'
import styles from "../styles/Home.module.scss"
import Card from 'react-bootstrap/Card'
import Link from 'next/link'

export default function ProjectCard({ project }) {
    const { title, slug, image, content, link } = project.fields
    return (
        <div className={styles.card}>
            <Card key={project.sys.id} className={`rounded-0 border-0 d-flex ${styles.cardBack}`}>
                <Card.Img className={`rounded-0 card-img ${styles.image}`} src={'https:' + image[0].fields.file.url} />
                {/* <Card.Img className={`rounded-0 card-img ${styles.image}`} /> */}
                <Card.ImgOverlay className={`d-flex align-items-center card-img-overlay ${styles.imageOverlay}`}>
                    {/* <Card.Title className={styles.overlayText}>{project.fields.title}</Card.Title> */}
                </Card.ImgOverlay>
            </Card>
            <div className={styles.cardInfo}>
                <h2>{project.fields.title}</h2>
                <p>Anim in dolor et pariatur magna sint enim nostrud eu cupidatat in. Sint ullamco ullamco amet do ut nulla dolore. Labore deserunt id consectetur et eu est esse ullamco consectetur ad ullamco ullamco. Incididunt ex anim cillum ut ex ad ad quis laborum. Lorem id tempor incididunt tempor cupidatat aliquip et.</p>
                <Link href={link} target="_blank" rel="noopener noreferrer">
                    <button>View</button>
                </Link>
            </div>
        </div>
    )
}

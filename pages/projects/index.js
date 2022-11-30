import React from 'react'
import Head from 'next/head'
import styles from "../../styles/Home.module.scss"
import Image from 'next/image';
import {Row, Col, Button } from "react-bootstrap"
import Card from 'react-bootstrap/Card'
import { createClient } from 'contentful'
import ProjectCard from '../../components/ProjectCard';

const myLoader = ({ src }) => {
  return `http://localhost:1337${src}`;
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID  ,
    accessToken: process.env.CONTENTFUL_ACCESS_ID
  });

  const res = await client.getEntries({ content_type: 'project'})
  const resHero = await client.getEntries({content_type: 'projectImage'})

  return {
    props: {
      projects: res.items,
      projectsImg: resHero.items
    }
  }
}

export default function Projects({projects, projectsImg}) {
  console.log(projectsImg[0].fields.projectsImage.fields.file.url)
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Services</title>
      </Head>
      <div className={styles.background} style={{ backgroundImage: `url(${'https:' + projectsImg[0].fields.projectsImage.fields.file.url})` }}></div>
      <div className={styles.pageWrapper}>
        <div className={styles.landingTagline}>
            <h1 className={styles.textUpper}>PROJECTS</h1>
            <h1 className={styles.textGradient}>PROJECTS</h1>
        </div>
      </div>
      <div className={styles.content}>
        <Row xs={1}
              md={2}
              lg={3}
              className="g-4">
          {projects.map((project, i) => {
            return (
             <ProjectCard key={i} project={project} />
            );
          })}
        </Row>
      </div> 
    </div>
  )
}

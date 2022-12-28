import React, { useState } from 'react'
import Head from 'next/head'
import styles from "../../styles/Home.module.scss"
import Image from 'next/image';
import {Row, Col, Button } from "react-bootstrap"
import Card from 'react-bootstrap/Card'
import { createClient } from 'contentful'
import ProjectCard from '../../components/ProjectCard';
import ProjectsListItem from '../../components/ProjectsListItem';


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
  const [data, setData] = useState(projects);

  const reverseProjects = data.map((item) => item).reverse();

  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      {/* <div className={styles.pageWrapper} style={{ backgroundImage: `url(${'https:' + projectsImg[0].fields.projectsImage.fields.file.url})` }}> */}
      <div className={styles.pageWrapper}>
        <div className={styles.content}>
              {/* <div className={styles.landingTagline}>
                  <h1 className={styles.textUpper}>PROJECTS</h1>
                  <h1 className={styles.textGradient}>PROJECTS</h1>
              </div> */}
              <ul>
                {reverseProjects.map((item, index) => {
                  const { title, slug, image, content, link } = item.fields
                  return (
                    <ProjectsListItem key={index} item={item} index={index} />
                  );
                })}
              </ul>
        </div>
      </div>
    </>
  )
}

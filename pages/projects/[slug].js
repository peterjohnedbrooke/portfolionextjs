import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { createClient } from 'contentful'
import styles from '../../styles/Home.module.scss'
import ProjectCard from "../../components/ProjectCard";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID  ,
  accessToken: process.env.CONTENTFUL_ACCESS_ID
});

export async function getStaticPaths() {
  const res = await client.getEntries({ content_type: 'project'})

  const paths = res.items.map((item => {
    return {
      params: {slug: item.fields.slug}
    }
  }))

  return {
    paths, 
    fallback: false
  }
}

export async function getStaticProps({params}) {
  const { items } = await client.getEntries({ content_type: 'project', 'fields.slug': params.slug})

  return {
    props: {project: items[0]}
  }
}

export default function Project({project}) {
    return (
      <div className={styles.projectWrapper}>
        <Head>
        </Head>
        <div className={styles.projectContent}>
          <ProjectCard project={project} />
        </div>
      </div>
    );
}

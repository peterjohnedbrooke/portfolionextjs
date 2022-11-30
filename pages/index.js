import Head from 'next/head'
import Image from 'next/image'
import Landing from '../components/Landing'
import styles from '../styles/Home.module.scss'
import { createClient } from 'contentful'

const URL = process.env.STRAPIBASEURL;

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID  ,
    accessToken: process.env.CONTENTFUL_ACCESS_ID
  });

  const res = await client.getEntries({ content_type: 'landingImage'})

  return {
    props: {
      landingImg: res.items
    }
  }

}


export default function Home({ landingImg}) {
  console.log(landingImg)
  return (
    <div className={styles.wrapper}>
      <Landing landingImg={landingImg}/>
    </div>
  )
}

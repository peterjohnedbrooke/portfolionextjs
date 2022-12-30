import '../styles/globals.scss'
import App from "next/app";
import NavBar from '../components/NavBar';
import { useEffect } from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import Head from 'next/head';

const URL = process.env.STRAPIBASEURL;

function MyApp({ Component, pageProps, logos }) {
  return (
    <>
    <Head>
    {/* <meta name="viewport" content="viewport-fit=cover" /> */}
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    </Head>
      <NavBar logos={logos}/>
      <Component {...pageProps} />
    </>
  )
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  return {...appProps}

}

export default MyApp;


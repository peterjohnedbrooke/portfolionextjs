import '../styles/globals.scss'
import App from "next/app";
import NavBar from '../components/NavBar';
import { useEffect } from 'react';

const URL = process.env.STRAPIBASEURL;

function MyApp({ Component, pageProps, logos }) {
  return (
    <>
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


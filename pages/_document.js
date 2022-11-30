import React from "react";
import { Html, Head, Main, NextScript } from "next/document";


export default function _document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
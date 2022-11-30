import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

const URL = process.env.STRAPIBASEURL;

export default function Project() {
    return (
      <div>
        <Head>
        </Head>
        <h2>Hello project page</h2>
      </div>
    );
  
//   if (!!artist) {
//     return (
//       <div>
//         <Head>
         
//         </Head>
       
//         <h2>Hello project page</h2>
//       </div>
//     );
//   }
//   return null;
}
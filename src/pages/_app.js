/* eslint-disable @next/next/no-sync-scripts */
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "@/styles/signup.css";
import "@/styles/signin.css";
import "@/styles/navbar.css";
import "@/styles/mainpage.css";
import "@/styles/projectcard.css";
import "@/styles/about.css";
import "@/styles/footer.css";
import AOS from 'aos'

import Navbar from "../../components/Navbar";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
       <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        ></link>
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        <script>AOS.init();</script>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

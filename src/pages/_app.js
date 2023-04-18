import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "@/styles/signup.css";
import "@/styles/signin.css";
import "@/styles/navbar.css";
import "@/styles/mainpage.css";
import "@/styles/projectcard.css";
import "@/styles/about.css";

import Head from "next/head";
import Navbar from "../../components/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

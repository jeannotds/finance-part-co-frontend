import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "@/styles/signup.css"
import "@/styles/signin.css"
import "@/styles/navbar.css"


import Head from "next/head";
import Nav from "../../components/Nav";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}

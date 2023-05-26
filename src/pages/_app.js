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
import "@/styles/loading.css";
import AOS from "aos";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import Router from "next/router";

import Navbar from "../../components/Navbar";
import Head from "next/head";
import Loader from "../../components/Loader";
import { useState } from "react";
import loading from "../../loading/loading";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
    console.log("Route in changing...");
  });
  Router.events.on("routeChangeComplete", (url) => {
    setLoading(false);
    console.log("Route in Ending...");
  });

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
      {loading ? (
        <Loader />
      ) : (
        <Provider store={store}>
          <Navbar />
          <Component {...pageProps} />
        </Provider>
      )}
    </>
  );
}

export async function getServerSideProps() {
  await loading();
  return {
    props: {
      pageProps: {},
    },
  };
}

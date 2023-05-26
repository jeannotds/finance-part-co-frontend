import React from "react";
import About from "../../components/About";
import Footer from "../../components/Footer";
import MainPage from "../../components/MainPage";
import loading from "../../loading/loading";

function about() {
  return (
    <>
      <MainPage />
      <About />
      <Footer />
    </>
  );
}

export async function getServerSideProps() {

  await loading();

  return {
    props: {},
  };

}

export default about;

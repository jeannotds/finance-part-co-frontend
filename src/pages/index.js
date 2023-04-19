/* eslint-disable @next/next/no-sync-scripts */
import { Inter } from "next/font/google";
import Navbar from "../../components/Navbar";
import MainPage, { Main } from "../../components/MainPage";
import ProjectCard from "../../components/ProjectCard";
import About from "../../components/About";
import Footer from "../../components/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="homepage">
        <MainPage />
        <ProjectCard />
        <Footer />
      </div>
    </>
  );
}

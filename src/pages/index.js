/* eslint-disable @next/next/no-sync-scripts */
import { Inter } from "next/font/google";
import MainPage, { Main } from "../../components/MainPage";
import ProjectCard from "../../components/ProjectCard";
import Footer from "../../components/Footer";

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

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3001/user");
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}

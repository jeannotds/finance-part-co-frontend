import { Inter } from "next/font/google";
import Navbar from "../../components/Navbar";
import MainPage, { Main } from "../../components/MainPage";
import ProjectCard from "../../components/ProjectCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="">
        <MainPage />
        <ProjectCard />
        <script>AOS.init();</script>
    </div>
  );
}

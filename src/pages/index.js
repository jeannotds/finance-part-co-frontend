import { Inter } from "next/font/google";
import Navbar from "../../components/Navbar";
import MainPage, { Main } from "../../components/MainPage";
import ProjectCard from "../../components/ProjectCard";
import About from "../../components/About";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="homepage">
        <MainPage />
        <ProjectCard />
        <script>AOS.init();</script>
    </div>
  );
}

import { Inter } from "next/font/google";
import Navbar from "../../components/Navbar";
import MainPage, { Main } from "../../components/MainPage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="">
        <MainPage />
        <script>AOS.init();</script>
    </div>
  );
}

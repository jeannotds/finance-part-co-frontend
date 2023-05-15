/* eslint-disable @next/next/no-sync-scripts */
import { Inter } from "next/font/google";
import MainPage, { Main } from "../../components/MainPage";
import ProjectCard from "../../components/ProjectCard";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_USER } from "@/redux/user";
import { useRouter } from "next/router";
import { SET_PROJECT } from "@/redux/project";
import loading from "../../loading/loading";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ dataproject }) {
  const [user, setUser] = useState();
  const dispatch = useDispatch();
  const router = useRouter();

  dispatch(SET_PROJECT(dataproject));

  // console.log("dataproject : ", dataproject);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userData = JSON.parse(window.localStorage.getItem("data"));
      setUser(userData?.user);
    }
  }, []);

  dispatch(SET_USER(user));

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
  await loading();

  const res = await fetch("http://localhost:3001/project");
  const dataproject = await res.json();

  if (!dataproject) {
    return {
      notFound: true,
    };
  }

  return {
    props: { dataproject },
  };
}

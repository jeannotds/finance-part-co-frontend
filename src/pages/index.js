/* eslint-disable @next/next/no-sync-scripts */
import { Inter } from "next/font/google";
import MainPage, { Main } from "../../components/MainPage";
import ProjectCard from "../../components/ProjectCard";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_USER } from "@/redux/user";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [user, setUser] = useState();
  const [token, setToken] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userData = JSON.parse(window.localStorage.getItem("data"));
      setUser(userData);
    }
  }, []);

  dispatch(SET_USER(user));

  const myuser = useSelector((state) => state.user);
  console.log("myuser myuser : ", myuser);

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

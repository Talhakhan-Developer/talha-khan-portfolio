import type { NextPage } from "next";
import Head from "next/head";
import { NavBar, Home as HomeComponent, About } from "../components";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Talha khan || Posrtfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <HomeComponent />
      <About />
    </div>
  );
};

export default Home;

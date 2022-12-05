import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import Layout from "../components/layout/page";

const Home: NextPage = () => {
  // const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Huiswerk</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <>
          <h1 className="text-center text-7xl font-bold">Huiswerk</h1>
          <p className="my-5 max-w-2xl p-2">
            Dutch for the word Homework. I don&apos;t know why I decided that.
            This is a program for keeping track of students on homework. Sounds
            evil. This website is like a checklist so that you don&apos;t have
            to type the emojis.
          </p>

          <div className="flex gap-2">
            <Link className="button " href="/class">
              <button className="text-white">Class</button>
            </Link>
            <Link className="button " href="/admin">
              <button className="text-white">Admin</button>
            </Link>
          </div>
        </>
      </Layout>
    </>
  );
};

export default Home;

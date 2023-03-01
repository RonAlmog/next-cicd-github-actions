import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className="text-teal-900 bg-yellow-200 p-3 font-semibold text-xl">
          hello worldyyy!
        </h1>
        <h4 className="p-4 bg-teal-200 rounded-md text-lg font-semibold">
          with all the details here!
        </h4>
      </main>
    </>
  );
}

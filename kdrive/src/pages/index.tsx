import Head from "next/head";
import HomeX from "@/componets/HomeX";

export default function Home() {
  return (
    <>
      <Head>
        <title>X Drive</title>
        <meta name="description" content="K-Drive storage" />
        <link rel="icon" href="/favicons/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
      </Head>
      <main className="min-h-screen select-none bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <HomeX /> 
      </main>
    </>
  );
}

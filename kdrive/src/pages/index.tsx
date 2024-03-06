import Head from "next/head";
import HomeX from "@/componets/HomeX";

export default function Home() {
  return (
    <>
      <Head>
        <title>K Drive</title>
        <meta name="description" content="K-Drive storage" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <main className="min-h-screen select-none ed-Home to-[#15162c]">
        <HomeX />
      </main>
    </>
  );
}
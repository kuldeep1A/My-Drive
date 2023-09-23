import Head from "next/head";
import HomeX from "@/componets/HomeX";

export default function Home() {
  return (
    <>
      <Head>
        <title>K Drive</title>
        <meta name="description" content="K-Drive storage" />
      </Head>
      <main className="min-h-screen select-none bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <HomeX />
      </main>
    </>
  );
}

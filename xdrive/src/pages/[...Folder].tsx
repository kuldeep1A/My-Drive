import React from 'react'
import Head from 'next/head'
import NavBar from '@/componets/NavBar'
import UploadX from '@/componets/UploadX'
import ShowFilesx from '@/componets/ShowFilesx'
import { useRouter } from 'next/router'

export default function Folder() {
    const router = useRouter();
    const parentid: string | undefined | string[] = router?.query?.id;

    console.log("parentid: ", parentid);

    return (
        <>
            <Head>
                <title>X Drive</title>
                <meta name="description" content="X-Drive storage" />
                <link rel="icon" href="/favicons/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
            </Head>
            <main className="min-h-screen  bg-gradient-to-b from-[#2e026d] to-[#15162c]">
                <NavBar />
                <UploadX parentId={parentid as string} />
                {/* <UploadX parentId={typeof parentid === 'string' ? parentid : ''} /> */}
                <ShowFilesx parentId={parentid as string} />
                {/* <ShowFilesx parentId={typeof parentid === 'string' ? parentid : ''} /> */}
            </main>
        </>
    )
}

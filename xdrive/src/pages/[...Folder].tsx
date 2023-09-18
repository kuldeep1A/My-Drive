import React from 'react'
import NavBar from '@/componets/NavBar'
import UploadX from '@/componets/UploadX'
import ShowFilesx from '@/componets/ShowFilesx'
import { useRouter } from 'next/router'

export default function Folder() {
    const router = useRouter();
    const parentid: string | undefined | string[] = router?.query?.id;
    console.log("parentid: ", parentid);

    return (
        <main className="min-h-screen  bg-gradient-to-b from-[#2e026d] to-[#15162c]">
            <NavBar />
            <UploadX parentId={parentid}/>
            <ShowFilesx parentId={parentid} />
        </main>
    )
}

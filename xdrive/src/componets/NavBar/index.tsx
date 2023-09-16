import React from "react";
import {signIn, signOut } from "next-auth/react"
import { useFetchSession } from "@/hooks/useFetchSession";
import Image from "next/image";
import Button from "@/componets/common/Button";
import Styles from './NavBar.module.scss'

export default function NavBar(){
    const session = useFetchSession();
    return (
         <>
            <div className="container flex flex-row px-5 py-5">
                <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem] px-10">
                    <span className="text-[hsl(280,100%,70%)]">X</span> Drive
                </h1>
                
                <div className={Styles.authBtn}>
                    {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
                    {session ? <> <Image src={`${session?.user.image}`} className="rounded-xl" width={50} height={50} alt="logo" /> <Button onClick={() => signOut()} btnClass={'btn-primary'} title='Sign Out'/> </>: <Button onClick={() => signIn()} btnClass={'btn-primary'} title='Sign In'/>}
                </div>
            </div>
            {session ? 
            <div className="container flex flex-row space-x-10  px-10 py-10">
                <h1>Name: {session?.user.name}</h1>
                <h1>Email: {session?.user.email}</h1>
            </div> : <div></div>}
        </>
   )
}
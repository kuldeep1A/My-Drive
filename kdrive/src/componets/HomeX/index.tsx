import React from "react";
import NavBar from "../NavBar";
import UploadX from "../UploadX";
import ShowFilesx from "../ShowFilesx";
import { useFetchSession } from "@/hooks/useFetchSession";
import SignIn from "../SignInX";

export default function HomeX() {
    const session = useFetchSession();
    return (
        <>
            <NavBar />
            {session ?
                <>
                    <UploadX parentId={""} />
                    <ShowFilesx parentId={""} />
                </> : <SignIn />}
        </>
    )
}
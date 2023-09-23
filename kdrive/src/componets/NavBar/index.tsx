/* eslint-disable @typescript-eslint/no-misused-promises */
import React from "react";
import { signIn, signOut } from "next-auth/react";
import { useFetchSession } from "@/hooks/useFetchSession";
import Image from "next/image";
import Button from "@/componets/common/Button";
import Styles from "./NavBar.module.scss";
import Link from "next/link";

export default function NavBar() {
  const session = useFetchSession();
  return (
    <>
      <div className={`px-5 py-5 ${Styles.NavBar}`}>
        {session ? (
          <>
            <div className={Styles.KDrive}>
              <Link href="/">
                <h1 className="px-10 text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
                  <span className="text-[hsl(180,100%,70%)]">K</span> Drive
                </h1>
              </Link>
            </div>
          </>
        ) : (
          <></>
        )}

        <div>
          <div className={Styles.authBtn}>
            {session ? (
              <>
                {" "}
                <Image
                  src={`${session?.user?.image}`}
                  draggable={false}
                  className="rounded-xl"
                  width={50}
                  height={50}
                  alt="logo"
                />{" "}
                <Button
                  onClick={() => signOut()}
                  btnClass={"btn-primary"}
                  title="Sign Out"
                />{" "}
              </>
            ) : (
              <Button
                onClick={() => signIn()}
                btnClass={"btn-primary"}
                title="Sign In"
              />
            )}
          </div>
        </div>
      </div>
      {session ? (
        <div className={`px-10 py-1 ${Styles.Info}`}>
          <h1>NAME: {session?.user?.name}</h1>
          <h1>{session?.user?.email}</h1>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}

import React from "react";
import Styles from "./SignIn.module.scss";

export default function SignIn() {
  return (
    <>
      <div className={Styles.CenterSigIn}>
        <span className={Styles.KDrive}>
          <div className={Styles.KDrive_child}>
            <h1 className="px-10 text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
              <span className="text-[hsl(180,100%,70%)]">K</span> Drive
            </h1>
          </div>
        </span>
      </div>
    </>
  );
}

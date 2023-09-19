import React from 'react';
import Styles from './SignIn.module.scss';

export default function SignIn() {  
  return (
    <>
        <div className={Styles.CenterSigIn}>
            <span className={Styles.XDrive}>
              <div className={Styles.XDrive_child}>
                <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem] px-10">
                    <span className="text-[hsl(180,100%,70%)]">X</span> Drive
                </h1>
              </div>
            </span>
        </div>
    </>
  )
}

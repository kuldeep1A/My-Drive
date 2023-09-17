import React from "react";
import styles from "./ShowFilesx.module.scss";
import { FetchFiles } from "@/hooks/FetchFiles";
import Image from "next/image";

export default function ShowFilesx() {
    const { fileList } = FetchFiles();
    console.log("fileList: ", fileList);
    return (
        <div className={styles.All_Files}>
            {
                fileList.map((file: {imageLink: ""}) => {
                    return (
                        <>
                        <div>
                           <div className={styles.file}>
                           {file.imageLink === "" ? <></> : <Image className={styles.immageLink} src={file.imageLink} alt="icon" width={300} height={300} priority={true} /> }
                           </div>
                        </div>
                        </>
                    )
                })
            }
        </div>

    )
}
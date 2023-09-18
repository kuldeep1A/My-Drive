import React, { useState } from "react";
import styles from './UplaodX.module.scss'
import Button from "../common/Button";
import FileUpload  from "@/API/FileUploadx";
import { addFolder } from "@/API/Firestorex";



export default function UploadX() {
    
    const [isVisibleF, setVisibleF] = useState(false);
    const [isVisibleFol, setVisibleFol] = useState(false);
    const [isVisibleL, setVisibleL] = useState(false);
    const [folderName, setfolderName] = useState("");
    const [Progress, setProgress] = useState(0);

    const uploadFolder = () => {
        const folder = {
            folderName: folderName,
            isFolder: true,
            folderList: [],
        }
        void addFolder(folder);
        setfolderName("");
        setVisibleFol(false);
    }
    
    
    const uploadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        FileUpload(file, setProgress, setVisibleL);
    }
    

    return (
        <div className={styles.main}>
            <Button onClick={() => {setVisibleF(!isVisibleF), setVisibleFol(false)} } btnClass="btn-outline btn-success mb-2 mt-2" title="Upload file"/>
            {isVisibleF ? 
                <> 
                    <div className="relative inline-block">
                        <input onChange={(event) => uploadFile(event)} type="file" className="file-input w-full max-w-xs ml-2.5 mr-2.5 mb-2 mt-2" />
                        {isVisibleL ? 
                        <>
                            <div className={styles.loading}>
                            <svg className={styles.spinner} stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <line x1="12" y1="2" x2="12" y2="6"></line>
                                <line x1="12" y1="18" x2="12" y2="22"></line>
                                <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
                                <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
                                <line x1="2" y1="12" x2="6" y2="12"></line>
                                <line x1="18" y1="12" x2="22" y2="12"></line>
                                <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
                                <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
                            </svg>
                            </div>
                            <div className={styles.progressing}>{Progress}%</div>
                        </>: <></>}
                    </div>
                </>
            : <></>  }
            <Button onClick={() => { setVisibleF(false), setVisibleFol(!isVisibleFol)}} btnClass="btn-outline btn-info mb-2 mt-2" title="Create Folder"/>
            {
                isVisibleFol ? 
               <div className="inline-block ml-2.5 relative">
                        <input type="text" value={folderName} onChange={(event) => setfolderName(event.target.value)} placeholder="Name" className="input input-bordered w-full max-w-xs" />
                        <button onClick={() => uploadFolder()} className={`${styles.uploadBtn} absolute`}>+</button>
               </div> : <></>
            }
        </div>
    )
}
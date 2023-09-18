import React, { useState } from "react";
import styles from './UplaodX.module.scss'
import Button from "../common/Button";
import FileUpload  from "@/API/FileUploadx";



export default function UploadX() {
    
    const [isVisibleF, setVisibleF] = useState(false);
    const [isVisibleL, setVisibleL] = useState(false);
    const [Progress, setProgress] = useState(0);
    
    const uploadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];        
        FileUpload(file, setProgress, setVisibleL);
    }

    return (
        <div className={styles.main}>
            <Button onClick={() => setVisibleF(!isVisibleF)} btnClass="btn-outline btn-success mb-2 mt-2" title="Upload file"/>
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
            <Button btnClass="btn-outline btn-info mb-2 mt-2" title="Create a Folder"/>
        </div>
    )
}
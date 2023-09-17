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
                        <div className={styles.loading}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
                                <circle cx="35" cy="50" r="5" fill="#ffffff">
                                    <animate attributeName="opacity" from="1" to="0" dur="1s" begin="0s" repeatCount="indefinite" />
                                </circle>
                                <circle cx="50" cy="50" r="5" fill="#ffffff">
                                    <animate attributeName="opacity" from="1" to="0" dur="1s" begin="0.2s" repeatCount="indefinite" />
                                </circle>   
                                <circle cx="65" cy="50" r="5" fill="#ffffff">
                                    <animate attributeName="opacity" from="1" to="0" dur="1s" begin="0.4s" repeatCount="indefinite" />
                                </circle>
                            </svg>
                            <div className="radial-progress" style={{"--value" as any: Progress}}>{Progress}%</div>

                        </div>: <></>}
                    </div>
                </>
            : <></>  }
            <Button btnClass="btn-outline btn-info mb-2 mt-2" title="Create a Folder"/>
        </div>
    )
}
import React from "react";
import styles from './UplaodX.module.scss'
import Button from "../common/Button";

export default function UploadX() {
    return (
        <div className={styles.main}>
            <Button btnClass="btn-outline btn-success" title="Upload file"/>
            <Button btnClass="btn-outline btn-info" title="Create a Folder"/>
        </div>
    )
}
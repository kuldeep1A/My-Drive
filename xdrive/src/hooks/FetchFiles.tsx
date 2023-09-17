/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { database } from "@/firebaseConfig";
import { onSnapshot, collection } from "firebase/firestore";
import { useEffect, useState } from "react";

const files = collection(database, "files");

export const FetchFiles = () => {
    const [fileList, setFileList] = useState<ArrayType>([{}]);

    useEffect(() => {
        return onSnapshot(files, (response) => {
            setFileList(response.docs.map((item) => {
                return {...item.data(), id: item.id}
            }))
            
        })
    }, []);

    return { fileList };
}
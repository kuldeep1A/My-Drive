/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { database } from "@/firebaseConfig";
import { onSnapshot, collection } from "firebase/firestore";
import { useEffect, useState } from "react";

const files = collection(database, "files");


export const FetchFiles = (parentId: string) => {
    const [fileList, setFileList] = useState<ArrayType>([{}]);
    const getFolders = () => {
        if (!parentId){
            onSnapshot(files, (response) => {
                setFileList(
                    response.docs.map((item) => {
                        return {...item.data(), id: item.id}
                    }).filter((item: any) => item.parentId === "")
                );
            })
        } else {
            onSnapshot(files, (response) => {
                setFileList(
                    response.docs.map((item) => {
                        return {...item.data(), id: item.id,}
                    }).filter((item: any) => item.parentId === parentId)
                );
            })
        }
    }
    useEffect(() => {
        getFolders();
    }, []);

    return { fileList };
}
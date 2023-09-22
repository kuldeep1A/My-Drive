import { database, } from "@/firebaseConfig";
import { onSnapshot, collection, where, query } from "firebase/firestore";
import { useEffect, useState } from "react";

const files = collection(database, "files");

export const FetchFiles = (parentId: string, UserEmail: string | undefined | null) => {

    const [fileList, setFileList] = useState<ArrayType>([{}]);
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getFolders = () => {
        if (UserEmail) {
            const _query = query(files, where("UserEmail", "==", UserEmail))
            if (!parentId && UserEmail){
                onSnapshot(_query, (response) => {
                    setFileList(
                        response.docs.map((item) => {
                            return {...item.data(), id: item.id}
                        })
                        /* eslint-disable @typescript-eslint/no-explicit-any */
                        /* eslint-disable @typescript-eslint/no-unsafe-member-access */
                        .filter((item: any) => item.parentId === "" && item.UserEmail === UserEmail)
                    );
                })
            } else if (UserEmail) {
                onSnapshot(_query, (response) => {
                    setFileList(
                        response.docs.map((item) => {
                            return {...item.data(), id: item.id,}
                        }).filter((item: any) => item.parentId === parentId && item.UserEmail === UserEmail)
                    );
                })
            }
        }
    }
    useEffect(() => {
        getFolders();
    }, [getFolders, UserEmail]);

    return { fileList };
}
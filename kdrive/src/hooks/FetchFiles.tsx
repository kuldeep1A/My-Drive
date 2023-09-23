import { database, } from "@/firebaseConfig";
import { onSnapshot, collection } from "firebase/firestore";
import { useState } from "react";
const files = collection(database, "files");
export const FetchFiles = (parentId: string, UserEmail: string | undefined | null) => {
    const [fileList, setFileList] = useState<ArrayType>([{}]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getFolders = () => {
        if (UserEmail) {
            if (!parentId && UserEmail) {

                onSnapshot(files, (response) => {
                    setFileList(
                        response.docs.map((item) => {
                            return { ...item.data(), id: item.id }
                        })
                            /* eslint-disable @typescript-eslint/no-explicit-any */
                            /* eslint-disable @typescript-eslint/no-unsafe-member-access */
                            // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                            .filter((item: any) => item.parentId === "" && (item.UserEmail === UserEmail || item.SharedTo?.includes(UserEmail)))
                    );
                })
            } else if (UserEmail) {
                onSnapshot(files, (response) => {
                    setFileList(
                        response.docs.map((item) => {
                            return { ...item.data(), id: item.id, }
                        }).filter((item: any) => item.parentId === parentId && item.UserEmail === UserEmail)
                    );
                })
            }
        }
    }
    getFolders();
    return { fileList };
}
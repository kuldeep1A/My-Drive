/* eslint-disable @typescript-eslint/await-thenable */
import { database } from "@/firebaseConfig";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";

const files = collection(database, 'files');
const Empty_no = collection(database, 'empty_no');


export const addFiles = async (imageLink: string, fileName: string, parentId: string, UserEmail: string | undefined | null) => {
    try {
        await addDoc(files, {
            imageLink: imageLink,
            fileName: fileName,
            isFolder: false,
            parentId: parentId ?? "",
            UserEmail: UserEmail
        });
    } catch (error) {
        console.log(error);
        alert(error);
    }
}

export const addFolder = async (folder: { 
    folderName: string;
    isFolder: boolean;
    folderList: object;
    parentId: string;
    UserEmail: string | undefined | null;
}) => {
    try {
        await addDoc(files, {
            folderName: folder.folderName,
            isFolder: folder.isFolder,
            folderList: folder.folderList,
            parentId: folder.parentId,
            UserEmail: folder.UserEmail,
        });
    } catch (error) {
        console.log(error);
        alert(error);
    }
}

export const addEmptyFolder = async (Empty_folder: { 
    EmptyNo: number
}) => {
    try {
        // /empty_no/znPJ7x9RlzUtP2dgh0jV
        const EmptyDocument: Record<string, number> = {};
        const empty_folder_ref = doc(Empty_no, "znPJ7x9RlzUtP2dgh0jV");
        const EmptyFiled = 'empty_folder_no';
        EmptyDocument[EmptyFiled] = Empty_folder.EmptyNo + 1;
        await setDoc(empty_folder_ref, EmptyDocument, {merge: true})
    } catch (error) {
        console.log(error);
        alert(error);
    }
}


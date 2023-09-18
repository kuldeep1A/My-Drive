import { database } from "@/firebaseConfig";
import {collection, addDoc } from "firebase/firestore";

const files = collection(database, 'files');

export const addFiles = async (imageLink: string, fileName: string) => {
    try {
        await addDoc(files,  {
            imageLink: imageLink,
            fileName: fileName
        });
    } catch (error) {
        console.log(error);
        alert(error);
    }
}
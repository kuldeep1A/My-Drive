import { database } from "@/firebaseConfig";
import {collection, addDoc } from "firebase/firestore";

const files = collection(database, 'files');

export const Firestorex = async (imageLink: string) => {
    try {
        await addDoc(files,  {
            imageLink: imageLink
        });
    } catch (error) {
        console.log(error);
        alert(error);
    }
}
import { database } from "@/firebaseConfig";
import { onSnapshot, collection } from "firebase/firestore";
import { useEffect, useState } from "react";

const empty_no = collection(database, "empty_no");

export const FetchEmptyFolder = () => {
    const [empty_no_list, setEmpty_no_list] = useState<ArrayType>([{}]);
    console.log("empty_no_list: ", empty_no_list)
    useEffect(() => {
        return onSnapshot(empty_no, (response)=> {
            setEmpty_no_list(
                response.docs.map((item) => {
                    return {...item.data()}
                })
            )
        })
    }, [])

    return {empty_no_list}
    
}
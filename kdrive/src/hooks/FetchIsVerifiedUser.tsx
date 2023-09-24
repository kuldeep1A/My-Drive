/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { database } from "@/firebaseConfig";
import { onSnapshot, collection } from "firebase/firestore";
import { useState } from "react";

const isVerifiedUserC = collection(database, "isVerifiedUser");
export const FetchIsVerifiedUser = (UserEmail: string | undefined | null) => {
  const [userDetails, setuserDetails] = useState([{}]);
  const getUserDetails = () => {
    if (UserEmail) {
      onSnapshot(isVerifiedUserC, (response) => {
        setuserDetails(
          response.docs
            .map((item) => {
              return { ...item.data() };
            })
            .filter((item: any) => item.UserEmail == UserEmail),
        );
      });
    }
  };
  getUserDetails();

  return { userDetails };
};

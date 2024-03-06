import React, { useState, useEffect, useMemo } from "react";
import Styles from "./SignIn.module.scss";

export default function SignIn() {
  const name = "K Drive";
  const service = "Files Manages with database on server.";
  const database = "asia-south1/2, Mumbai/Delhi";
  const security = "https://firebase.google.com/docs/rules";
  const privacy = "https://firebase.google.com/support/privacy";
  const dataLinking = "Designed for seamless real-time data synchronization and efficient querying for web and mobile applications.";

  const words = useMemo(
    () => [name, service, database, security, privacy, dataLinking],
    [name, service, database, security, privacy, dataLinking]
  );
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (words[currentWordIndex] === undefined) {
      return;
    }
    const typingInterval = setInterval(() => {
      setCurrentCharIndex((prevCharIndex) => prevCharIndex + 1);
    }, 100);

    const wordLength = words[currentWordIndex]?.length ?? 0;
    const timeout = setTimeout(() => {
      setCurrentCharIndex(0);
      setCurrentWordIndex((prevWordIndex) =>
        prevWordIndex === words.length - 1 ? 0 : prevWordIndex + 1
      );
    }, wordLength * 1100);

    return () => {
      clearInterval(typingInterval);
      clearTimeout(timeout);
    };
  }, [currentWordIndex, words]);

  return (
    <div className={Styles.CenterSigIn}>
      <span className={Styles.KDrive}>
        <div className={Styles.KDrive_child}>
          <div>
            <code>
              <b>Name:</b> {words[0]?.substring(0, currentCharIndex) ?? ""}
            </code> <br />
            <code>
              <b>Service:</b> {words[1]?.substring(0, currentCharIndex) ?? ""}
            </code><br />
            <code>
              <b>Database:</b> {words[2]?.substring(0, currentCharIndex) ?? ""}
            </code><br />
            <code>
              <b>Security:</b> {words[3]?.substring(0, currentCharIndex) ?? ""}
            </code><br />
            <code>
              <b>Privacy:</b> {words[4]?.substring(0, currentCharIndex) ?? ""}
            </code><br />
            <code>
              <b>Data Linking:</b> {words[5]?.substring(0, currentCharIndex) ?? ""}
            </code>
          </div>
        </div>
      </span>
    </div>
  );
}

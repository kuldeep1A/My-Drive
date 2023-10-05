import React, { useEffect, useRef, useState } from "react";
import styles from "./ShowFilesx.module.scss";
import { FetchFiles } from "@/hooks/FetchFiles";
import { FaJava, FaPython } from "react-icons/fa";
import { RiJavascriptLine } from "react-icons/ri";
import { TbFileTypeHtml, TbFileTypeJsx } from "react-icons/tb";
import { GrStatusUnknown } from "react-icons/gr";
import { MdOutlineEmail } from "react-icons/md";
import {
  BsFolder,
  BsFiletypeExe,
  BsFiletypeXlsx,
  BsFiletypeCss,
  BsFiletypeMp3,
  BsFiletypeMp4,
  BsFiletypeDocx,
  BsFileTextFill,
  BsFiletypeJpg,
  BsFiletypePng,
  BsFiletypeGif,
  BsFiletypePdf,
  BsFiletypeSvg,
  BsFiletypeAac,
} from "react-icons/bs";
import { useRouter } from "next/router";
import { useFetchSession } from "@/hooks/useFetchSession";
import { FetchIsVerifiedUser } from "@/hooks/FetchIsVerifiedUser";
import { ShareFiles, isVerified } from "@/API/Firestorex";

export default function ShowFilesx({ parentId }: FolderStructure) {
  const session = useFetchSession();
  const [_shareName, setShareName] = useState("");
  const [currentFileId, setCurrentFileId] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isVerifiedUser, setisVerifiedUser] = useState(false);
  const [isConfimationSend, setConfimationSend] = useState(false);
  const { fileList } = FetchFiles(parentId, session?.user?.email);
  const { userDetails } = FetchIsVerifiedUser(session?.user?.email);
  const router = useRouter();
  const OpenFile = (filelink: string, isFolder: boolean) => {
    if (!isFolder) {
      window.open(filelink);
    }
  };
  const CheckType = (fileName: string) => {
    if (fileName !== undefined) {
      const fileExtenstion = fileName.split(".").pop();
      switch (fileExtenstion) {
        case "svg":
          return <BsFiletypeSvg className={styles.icon} size={80} />;
        case "png":
          return <BsFiletypePng className={styles.icon} size={80} />;
        case "jpg":
          return <BsFiletypeJpg className={styles.icon} size={80} />;
        case "gif":
          return <BsFiletypeGif className={styles.icon} size={80} />;
        case "pdf":
          return <BsFiletypePdf className={styles.icon} size={80} />;
        case "txt":
          return <BsFileTextFill className={styles.icon} size={80} />;
        case "doc":
          return <BsFiletypeDocx className={styles.icon} size={80} />;
        case "docx":
          return <BsFiletypeDocx className={styles.icon} size={80} />;
        case "xlsx":
          return <BsFiletypeXlsx className={styles.icon} size={80} />;
        case "mp4":
          return <BsFiletypeMp4 className={styles.icon} size={80} />;
        case "mp3":
          return <BsFiletypeMp3 className={styles.icon} size={80} />;
        case "aac":
          return <BsFiletypeAac className={styles.icon} size={80} />;
        case "py":
          return <FaPython className={styles.icon} size={80} />;
        case "java":
          return <FaJava className={styles.icon} size={80} />;
        case "css":
          return <BsFiletypeCss className={styles.icon} size={80} />;
        case "html":
          return <TbFileTypeHtml className={styles.icon} size={80} />;
        case "jsx":
          return <TbFileTypeJsx className={styles.icon} size={80} />;
        case "js":
          return <RiJavascriptLine className={styles.icon} size={80} />;
        case "exe":
          return <BsFiletypeExe className={styles.icon} size={80} />;
        default:
          return <GrStatusUnknown className={styles.icon} size={80} />;
      }
    }
  };
  const createFolder = (folderName: string, id: string) => {
    return (
      <BsFolder
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onClick={() =>
          router.push(
            folderName === "" ? `/empty?id=${id}` : `/${folderName}?id=${id}`,
          )
        }
        className={styles.icon}
        size={80}
      />
    );
  };
  const modalRef = useRef<HTMLDialogElement | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fetchName = (event: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    const parentDiv = event.currentTarget.parentNode;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    const fileNameDiv = parentDiv.querySelector(
      "[data-filename]",
    ) as HTMLDivElement;

    if (fileNameDiv) {
      const shareName = fileNameDiv.textContent ?? "";
      setShareName(shareName);
    }
  };
  const EmailChange = () => {
    const enteredEmail = email;
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (enteredEmail === "" || emailRegex.test(enteredEmail)) {
      setEmail(enteredEmail);
      return true;
    } else {
      return false;
    }
  };
  const SharedEmail = () => {
    if (email.trim() === "" || !EmailChange()) {
      setErrorMessage("Please enter an email address.");
    } else if (EmailChange()) {
      setErrorMessage("");
      void ShareFiles(email, currentFileId);
      modalRef.current?.close();
    }
    setEmail("");
  };
  function shorten_filename(name: string, maxLength: number): string {
    const [__name, extension] = name.split(".");
    if (!__name || !extension || name.length < maxLength) {
      return name;
    }
    const keepNameLength = maxLength - 5 - extension.length - 1;
    const shortenedName = __name.slice(0, keepNameLength);
    const lastFourC = __name.slice(-4);
    const newFilename = `${shortenedName}...${lastFourC}.${extension}`;
    return newFilename;
  }
  const AdministratorEmail = "kuldeepdhangarkd@gmail.com";
  const handleSendEmail = () => {
    const subject = "Confirmation kdrive";
    const body =
      'This is your confirmation that you are authorized to use "kdrive," with approval granted by Administrator.';
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(AdministratorEmail)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(mailtoLink);
  };

  const confirmationSending = () => {
    if (session?.user?.name && session?.user.email) {
      const User = {
        Name: session?.user?.name,
        UserEmail: session?.user?.email,
        IsVerified: false,
        IsConfirmationSend: true,
      };
      void isVerified(User);
    }
  };

  useEffect(() => {
    if (Array.isArray(userDetails) && userDetails.length > 0) {
      const firstUserDetail = userDetails[0] as {
        IsVerified?: boolean;
        IsConfirmationSend?: boolean;
      };
      if (firstUserDetail?.hasOwnProperty("IsVerified")) {
        setisVerifiedUser(!!firstUserDetail.IsVerified);
        setConfimationSend(!!firstUserDetail.IsConfirmationSend);
      }
    }
  }, [userDetails]);
  return (
    <div>
      {isVerifiedUser ? (
        <div className={styles.All_Files}>
          {fileList.map(
            (
              file: {
                imageLink: "";
                fileName: "";
                isFolder: false;
                folderName: "";
                id: "";
              },
              index: number,
            ) => {
              const keyx = `${file.id}-${index}`;
              return (
                <div key={keyx} className={file.isFolder ? styles.FolderMargin : styles.FileMargin}>
                  <div>
                    {
                      <div
                        className={styles.file}
                        onClick={() => {
                          OpenFile(file.imageLink, file.isFolder);
                        }}
                      >
                        <div className={styles.manageIcon}>
                          <div className={styles.icons}>
                            {file.isFolder
                              ? createFolder(file.folderName, file.id)
                              : CheckType(file.fileName)}
                          </div>
                          <div
                            data-filename={"___shareName"}
                            className={styles.filename}
                          >
                            <div>
                              {window.innerWidth >= 480 ? (
                                file.fileName !== undefined ? (
                                  shorten_filename(file.fileName, 20)
                                ) : file.folderName !== undefined ? (
                                  shorten_filename(file.folderName, 20)
                                ) : (
                                  <></>
                                )
                              ) : file.fileName !== undefined ? (
                                shorten_filename(file.fileName, 27)
                              ) : file.folderName !== undefined ? (
                                shorten_filename(file.folderName, 27)
                              ) : (
                                <></>
                              )}
                            </div>
                          </div>
                        </div>
                        {/* {file.imageLink === "" ? <></> : <Image className={styles.immageLink} src={file.imageLink} alt="icon" width={300} height={300} priority={true} /> } */}
                      </div>
                    }
                    {!file.isFolder ? (
                      <div className={styles.email} onClick={fetchName}>
                        <MdOutlineEmail
                          onClick={() => {
                            modalRef.current?.showModal();
                            setCurrentFileId(file.id);
                          }}
                          size={35}
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                  <dialog ref={modalRef} className="modal">
                    <div className={`modal-box ${styles.modelBox}`}>
                      <form method="dialog">
                        <button className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">
                          ✕
                        </button>
                      </form>
                      <h3 className="text-lg font-bold">Share {_shareName}</h3>
                      <div>
                        <div className={styles.shareBox}>
                          <input
                            type="email"
                            required={true}
                            placeholder="Email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            className={`input input-bordered w-full max-w-xs ${styles.shareInput}`}
                          />
                          <button
                            onClick={() => {
                              EmailChange();
                              SharedEmail();
                            }}
                            className="px-5"
                          >
                            Share
                          </button>
                        </div>
                        {errorMessage === "" ? (
                          <></>
                        ) : (
                          <p className={styles.errorMessage}>{errorMessage}</p>
                        )}
                      </div>
                    </div>
                  </dialog>
                </div>
              );
            },
          )}
        </div>
      ) : (
        <>
          <main className={styles.main}>
            <div className={styles.Confirmation}>
              <div>
                <div className={styles.Info}>
                  Your <span>Email</span> Account <b>requires</b> verification
                  by an <b>administrator</b> to access this application. Please
                  send a <b>confirmation</b> email to <b>Administrator</b>.
                </div>
              </div>

              <div>
                <div>
                  {isConfimationSend ? (
                    <>
                      <div className={styles.SendConfirmation}>
                        <div className={styles.sdf}>
                          <span>
                            <p className={styles.ConfirmationInfo}>
                              If your send email successfully to{" "}
                              <b className={styles.sdf1}>Admin.</b> Wait For
                              Confirmation. If Administrator{" "}
                              <b className={styles.sdf1}>Conform</b> your
                              Account you can use this application
                            </p>
                          </span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className={styles.ConfirmationBtn}>
                      <button
                        onClick={() => {
                          handleSendEmail();
                          confirmationSending();
                          setConfimationSend(true);
                        }}
                        className="btn btn-success btn-sm"
                      >
                        Confirmation Send
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </main>
        </>
      )}
    </div>
  );
}

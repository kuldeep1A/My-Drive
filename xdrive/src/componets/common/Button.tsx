import React from "react";

export default function Button({ btnClass, title, onClick }: xButton){
    return <button onClick={onClick} className={`btn ${btnClass}`}>{title}</button>
}
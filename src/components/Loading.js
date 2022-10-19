import React from "react";
import "../style.css";

const Loading = () => {
    return (
        <div className={"border loading p-0 position-absolute"}>
            <div className={"lds-facebook p-0"}><div></div><div></div><div></div></div>
        </div>
    )
}

export default Loading;
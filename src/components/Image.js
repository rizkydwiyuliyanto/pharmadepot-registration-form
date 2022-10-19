import React from "react";
import pharmacy from "../../images/pharmacy.png"
import logo from "../../images/pharmacy-logo.png"

const Image = () => {
    return (
        <div className={"rounded-end px-5 py-4 image d-flex flex-column justify-content-between"}>
            <div>
                <div className={"d-flex text-light mb-5 align-items-center"}>
                    <img src={logo} width={"60"} className={"me-4"}/>
                    <h2>Pharmadepot</h2>
                </div>
                <span className={"fs-large text-light fw-bold"}>
                    Go through the registration form with us easily
                </span>
            </div>
            <img src={pharmacy} width={"100%"} className={"mb-2"}/>
        </div>
    )
}

export default Image;
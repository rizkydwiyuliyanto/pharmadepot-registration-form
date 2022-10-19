import React, { useEffect, useRef } from "react";
import danger from "../../images/exclamation.png";
import Loading from "./Loading";
import satisfied from "../../images/relieved.png";

const MainregistrationForm  = ({ IsLoading ,Form, Setform }) => {
    const Ref = useRef();
    
    useEffect(() => {
        // console.log(Form);
        Ref.current.style.background = `linear-gradient(to right, #00C1B6 0%, #00C1B6 ${parseInt(Form.service) * 25}%, #EBEBEB ${parseInt(Form.service) * 25}%, #EBEBEB 100%)`;
    })
    
    const handleChange = (e) => {
        Setform({
            ...Form,
            [e.target.name] : e.target.value
        })
    }

    const handleClick = (e) => {
        Setform({
            ...Form,
            [e.target.name]: e.target.value
        })
    }

    const handleInput = (e) => {
        Setform({
            ...Form,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(JSON.stringify(Form,null,2))
    }

    return (
        <>
        {!IsLoading && <Loading/>}
        <div style={{"display":!IsLoading?"none":"block"}}>
                <div className={"pt-4 section position-relative"}>
                <div className={"row ms-5 m-0 col-xxl-8 col-xl-10"}>
                    <span className={"fw-bold p-0 fs-large"}>Registration form</span>
                    <form onSubmit={handleSubmit} className={"row mt-xl-4 mt-xxl-5 justify-content-between"}>
                        <div className={"row col-12 m-0 p-0"}>
                            <div className={"col align-items-center d-flex justify-content-between ps-4 p-3 me-3 rounded-3 p-0 m-0 input"}>
                                <input name={"firstName"} onChange={handleChange} value={Form.firstName} placeholder="firstname" className={"col-10"}/>
                                {!Form.firstName?<img src={danger} width={"20"}/>:""}
                            </div>
                            <div className={"col align-items-center d-flex justify-content-between ps-4 p-3 rounded-3 p-0 m-0 input"}>
                                <input name={"lastName"} onChange={handleChange} value={Form.lastName} placeholder="Last name" className={"col-10"}/>
                                {!Form.lastName?<img src={danger} width={"20"}/>:""}
                            </div>
                        </div>
                        <div className={"col-12 align-items-center d-flex justify-content-between mt-4 ps-4 p-3 rounded-3 m-0 input"}>
                            <input name={"idNumber"} onChange={handleChange} value={Form.idNumber} placeholder="ID Number" className={"col-10"}/>
                            {!Form.idNumber?<img src={danger} width={"20"}/>:""}
                        </div>
                        <div className="p-0 mt-4">
                            <div className={"row m-0"}>
                                <div className={"input rounded-3 px2 py-3 me-3 col"}>
                                    <select style={{"border":"none"}} className={"input col-12 text-light"} name={"phoneCode"}>
                                        <option value="" disabled selected hidden>+62</option>
                                        <option className={"me-2"} value={"+62"}>+62</option>
                                    </select>
                                </div>
                                <div className={"input d-flex align-items-center justify-content-between col-10 ps-4 p-3 rounded-3"}>
                                    <input type={"number"} name={"mobileNumber"} onChange={handleChange} value={Form.mobileNumber} placeholder="Mobile Number" className={"col-10"}/>
                                    {!Form.mobileNumber?<img src={danger} width={"20"}/>:""}
                                </div>
                            </div>
                        </div>
                        <div className={"col-12 p-0 mt-4"}>
                            <span className={"fw-bold fs-normal"}>Are you a Pharmadepo user?</span>
                            <div className={"row m-0 col-10 p-0 mt-3"}>
                                <div className={"d-flex p-0  align-items-center col-2"}>
                                    <input type={"radio"} name={"IspharmadepoUser"} value={"yes"} className={"me-2"}/>
                                    <label className={"fs-small fw-bold"}>Yes</label>
                                </div>
                                <div className={"d-flex p-0 align-items-center col-2"}>
                                    <input type={"radio"} name={"IspharmadepoUser"} value={"no"} className={"me-2"}/>
                                    <label className={"fs-small fw-bold"}>No</label>
                                </div>
                            </div>
                        </div>
                        <div className={"col-12 p-0 mt-4"}>
                            <span className={"fw-bold fs-normal"}>How satisfied are you with the Pharmadepot user?</span>
                            <div style={{"height":"90px"}} className={"d-flex align-items-center"}>
                                <img src={satisfied} width={"35px"} className={"me-4"}/>
                                <div style={{"height":"100%"}} className={"row align-items-center m-0 col-8 col-xxl-6 p-0 position-relative"}>
                                    <input ref={Ref} onInput={handleInput} value={Form.service} type={"range"} min={0} max={4} name={"service"} className={"p-0 col-12 mb-2 m-0"}/>
                                    <span style={{"bottom":"0", "left":`${parseInt(Form.service) * 24}%`, "position":"absolute"}} className={"fw-bold text-secondary fs-normal col-1"}>{parseInt(Form.service) + 1}</span>
                                </div>
                            </div>
                        </div>
                        <div className={"col-12 p-0 mt-4 mt-xxl-5"}>
                            <span className={"fw-bold fs-normal"}>Which products do you prefer?</span>
                            <div className={"row m-0 col-10 p-0 mt-3"}>
                                <div className={"d-flex p-0 me-5 align-items-center col-3"}>
                                    <input type={"radio"} name={"product"} value={"medications"} className={"me-2"}/>
                                    <label className={"fs-small fw-bold"}>Medications</label>
                                </div>
                                <div className={"d-flex p-0 align-items-center col-3"}>
                                    <input type={"radio"} name={"product"} value={"pharmacy"} className={"me-2"}/>
                                    <label className={"fs-small fw-bold"}>Pharmacy</label>
                                </div>
                            </div>
                        </div>
                        <div className={"col-9 p-0 my-4"}>
                            <span className={"fw-bold fs-normal"}>What would you like to add?</span>
                            <div style={{"height":"200px", "backgroundColor":"#EBEBEB"}} className={"rounded-3 p-0 m-0 overflow-hidden d-flex flex-column mt-2 ps-4 pb-0 pt-4"}>
                                <textarea style={{"background":"none","height":"80%"}} className={"text-secondary col-12"}/>
                                <button name={"review"} value={Form.review} onClick={handleClick} style={{"background":"#00C1B6","height":"20%","border":"none","borderRadius":"10px 0px 0px 0px"}} className={"ms-auto text-light align-center fw-bold fs-small col-4"}>Add</button>
                            </div>
                        </div>
                        <div className={"p-0"}>
                            <span className={"fw-bold fs-normal"}>Which branch do you want to take the card from?</span>
                            <div className={"row mt-2 m-0 p-0 col-12"}>
                                <div className={"input col m-0 px-2 me-3 rounded-2 overflow-hidden"}>
                                    <select style={{"border":"none"}} className={"col-12 text-light input py-3"}>
                                        <option value="" disabled selected hidden>Choose your district</option>
                                        <option></option>
                                    </select>
                                </div>
                                <div className={"input rounded-2 m-0 px-2 col overflow-hidden"}>
                                    <select style={{"border":"none"}} className={"col-12 position-relative text-light py-3 input"}>
                                        <option value="" disabled selected hidden>Select a branch</option>
                                        <option></option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <button type={"submit"} style={{"backgroundColor":"#F9F872","border":"none"}} className={"my-4 mt-5 rounded-2 py-2 py-xxl-3 px-3 col-4 col-xxl-5 fw-bold button-register-shadow"}>Register</button>
                    </form>
                </div>
                </div>
        </div>
        </>
    )
}

export default MainregistrationForm;
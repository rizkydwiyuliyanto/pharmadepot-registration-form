import React, { useState, useEffect } from "react";
import Image from "./components/Image";
import MainregistrationForm from "./components/MainregistrationForm";
import "./style.css";


const App = () => {
    const [users, setUsers] = useState("");
    const [form, setForm] = useState({
        firstName:"",
        lastName:"",
        idNumber:"",
        phoneCode:"",
        phoneNumber:"",
        service:"0",
        review:""
    })

    useEffect(() => {
        fetch("https://dummyjson.com/users",[])
        .then(res => res.json())
        .then(x => setUsers(x))
        console.log(users.users);
    },[!users])

    return (
        <>
        <Image/>
        <MainregistrationForm IsLoading={users} Form={ form } Setform={ setForm }/>
        </>
    )
}

export default App;
import React, { useState } from "react"
import axios from "axios"
export default function Register({setOnOpen}){
    const [username,setUserName]=useState("")
    const [name,setName]=useState("")
    const [surname,setSurName]=useState("")
    const [password,setPassword]=useState("")
    const [email, setEmail]=useState("")
    

    async function sendPost(e){  
        e.preventDefault()
    const response = await axios
    
      .post("http://localhost:3003/urlchopper/user", {
        Name: name,
        Surname: surname,
        LoginName: username,
        password: password,
        Email: email
      })
      .then(
        (res) => console.log(res)
        )  
        setOnOpen(false)   
    }

    return(
        <div>
            <form className="register-form" onSubmit={sendPost}>
            <input type ="text" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
            <input type ="text" placeholder="Surname" onChange={(e) => setSurName(e.target.value)}/>
                <input type ="text" placeholder="username" required onChange={(e) => setUserName(e.target.value)}/>
                <input type ="password" placeholder="password" required onChange={(e) => setPassword(e.target.value)}/>
                <input type ="email" placeholder="your email" required onChange={(e) => setEmail(e.target.value)}/>
                <button>Register</button>
            </form>
        </div>
    )

}
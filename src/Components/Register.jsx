import React, { useState } from "react"

export default function Register(){
    const [username,setUserName]=useState("")
    const [password,setPassword]=useState("")
    const [email, setEmail]=useState("")

    return(
        <div>
            <form>
                <input type ="text" placeholder="username"/>
                <input type ="password" placeholder="password"/>
                <input type ="email" placeholder="your email"/>
                <button>Register</button>
            </form>
        </div>
    )

}
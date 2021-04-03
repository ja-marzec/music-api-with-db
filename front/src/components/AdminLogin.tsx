import axios from "axios";
import React, { useState } from "react";
import { useStore } from "react-redux";
import { Redirect } from "react-router";


declare module 'axios' {
    export interface AxiosRequestConfig {
      handlerEnabled: boolean;
    }
  }
export default function AdminLogin(){


const [input, setIinput] = useState<string>("");
const [redirect, setRedirect] = useState<boolean>(false);


function changeInput(e:any) {
    setIinput(e.target.value)
}
function attemptLogin() {
    axios.post("http://localhost:5000/admin", { password: input })
    .then(res => {
        if(res.data === "OK") {
                setRedirect(true);
        } else {
            alert("wrong password");
        }
    })
}
    return(
        <div>
           <input value={input} placeholder="login" onChange={(e) => changeInput(e)}/> 
           <button onClick={() => attemptLogin()}>Login</button>
           {redirect ? <Redirect to="/admin"></Redirect> : null}
        </div>
    )
}
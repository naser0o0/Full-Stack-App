import React, {useState} from 'react';
import Layout from '../../layout/Layout';
// import { loginRequest } from '../controller/requestController';



export default function LoginForm(){

    const newUserSchema = {
        username: "",
        password: "",
       
    }

    const [user, setUser]=useState();


    // function handleLoginForm (e){
    //    setUser(prev=>({...prev, [e.target.name]: e.target.value}))
    // }

    // function handleLogin (e){
    //     e.preventDefault();
    //     loginRequest(user); // post request to server
    // }


    return(
        <Layout>
            <div>
            <h1>Login form </h1>
            <form>
                <input type="text" name="username" placeholder="username" required onChange={handleLoginForm}/><br/>
                <input type="password" name="password" placeholder="password" required onChange={handleLoginForm}/><br/>
                <button onClick={handleLogin}>Login</button>
            </form>
            </div>
        </Layout>
    )
}

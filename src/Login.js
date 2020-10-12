import { Button } from '@material-ui/core';
import React from 'react';
import "./Login.css";
import { auth , provider} from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

function Login() {

    const [ state, dispatch ] = useStateValue();

    const signIn = () =>{
        //
        auth.signInWithPopup(provider).then(
            result => {

                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });

                }).catch((error) => alert(error.message));
    }; 
    return (
        <div className="login">
            <div className="loginLogo">
                <img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png" alt="" />

                
                <h2>  Facebook </h2>
            </div>
            <Button type="submit" onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login;

import React, { useState } from 'react';
import { NAVBAR_HEIGHT } from '../../../constants/other';
import { Input } from '../../base/Input/Input';
import './Auth.scss';

export const AuthPage = () => {
    const [isLoginMode, setLoginMode] = useState(true);

    const handleModeChange = () => {
        setLoginMode((prevState) => {
            return !prevState;
        });
    }

    return (
        <div className='container' style={{
            height: `calc(100vh - ${NAVBAR_HEIGHT})`
        }}>
            <h1 className='form-title'>{isLoginMode ? "Log in" : "Sign up"}</h1>
            <form>
                <div className='form-container'>
                    <Input labelValue="Email" />
                    <Input labelValue="Password" />
                    <button type="submit">{isLoginMode ? "LOG IN" : "SIGN UP"}</button>
                </div>
            </form>
            <div className='signup'>
                <p style={{ marginRight: "5px" }}>{isLoginMode ? "Don't have an account?" : "Already have an account?"}</p>
                <p className="modeChange" onClick={handleModeChange}>{isLoginMode ? "Sign up." : "Login."}</p>
            </div>
        </div>
    )
}
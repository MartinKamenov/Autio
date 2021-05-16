import React, { useState } from 'react';
import { NAVBAR_HEIGHT } from '../../../constants/other';
import { Input } from '../../base/Input/Input';
import './Auth.scss';
import { useTranslation, languageKeys } from '../../../services/translations';

export const AuthPage = () => {
    const [isLoginMode, setLoginMode] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {t} = useTranslation();

    const handleModeChange = () => {
        setLoginMode((prevState) => {
            return !prevState;
        });
    }

    return (
        <div className='container' style={{
            height: `calc(100vh - ${NAVBAR_HEIGHT})`
        }}>
            <h1 className='form-title'>{isLoginMode ?
                t(languageKeys.authentication.loginHeader) :
                t(languageKeys.authentication.registerHeader)}</h1>
            <form>
                <div className='form-container'>
                    <Input labelValue={t(languageKeys.authentication.email)}
                        value={email}
                        onChange={({target: {value}}) => setEmail(value)} />
                    <Input labelValue={t(languageKeys.authentication.password)}
                        value={password}
                        type='password'
                        onChange={({target: {value}}) => setPassword(value)}/>
                    <button type="submit">{isLoginMode ?
                        t(languageKeys.authentication.loginSubmit) :
                        t(languageKeys.authentication.registerSubmit)}</button>
                </div>
            </form>
            <div className='signup'>
                <p style={{ marginRight: "5px" }}>{isLoginMode ?
                    t(languageKeys.authentication.loginLinkDesc) :
                    t(languageKeys.authentication.registerLinkDesc)}</p>
                <p className="modeChange" onClick={handleModeChange}>{isLoginMode ?
                    t(languageKeys.authentication.registerHeader) :
                    t(languageKeys.authentication.loginHeader) + '.'}</p>
            </div>
        </div>
    )
}
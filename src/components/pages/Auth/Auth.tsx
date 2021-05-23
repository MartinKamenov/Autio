import React, { useState } from 'react';
import { NAVBAR_HEIGHT } from '../../../constants/other';
import { Input } from '../../base/Input/Input';
import './Auth.scss';
import { useTranslation, languageKeys } from '../../../services/translations';
import { useUser } from '../../../services/user';
import useInput from '../../../services/useInput';

const validateEmail = (value: string) => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (value.match(regex)) {
        return true;
    }
    else {
        return false;
    }
}

export const AuthPage = () => {
    const [isLoginMode, setLoginMode] = useState(true);

    const { t } = useTranslation();

    const { loading, user, login, register } = useUser();

    const { enteredValue: email, valueTouched: emailTouched, isValid: emailIsValid,
        showError: showEmailError, setInputValue: setEmailInputValue } = useInput((email) => validateEmail(email)
        );

    const { enteredValue: password, valueTouched: passwordTouched, isValid: passwordIsValid,
        showError: showPasswordError, setInputValue: setPasswordInputValue } = useInput((password) => password.length > 8
        );


    const handleModeChange = () => {
        setLoginMode((prevState) => {
            return !prevState;
        });
    }

    const handleFormSubmit = (event: any) => {
        if (!emailIsValid || !passwordIsValid) {
            return;
        }

        if (isLoginMode) {
            login({ email, password });
        }
        else {
            register({ email, password });

            console.log(user);
        }
    }

    return (
        <div className='container' style={{
            height: `calc(100vh - ${NAVBAR_HEIGHT})`
        }}>
            <h1 className='form-title'>{isLoginMode ?
                t(languageKeys.authentication.loginHeader) :
                t(languageKeys.authentication.registerHeader)}</h1>
            <form onSubmit={handleFormSubmit}>
                <div className='form-container'>
                    <Input labelValue={t(languageKeys.authentication.email)}
                        value={email}
                        onChange={(event) => setEmailInputValue(event.target.value)} />
                    {!emailIsValid && emailTouched && showEmailError &&
                        <p style={{ color: 'red' }}>{t(languageKeys.authentication.emailInvalid)}</p>
                    }
                    <Input labelValue={t(languageKeys.authentication.password)}
                        value={password}
                        type='password'
                        onChange={(event) => setPasswordInputValue(event.target.value)} />
                    {!passwordIsValid && passwordTouched && showPasswordError &&
                        <p style={{ color: 'red' }}>{t(languageKeys.authentication.passwordMustContain)}</p>
                    }
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

import React, { useEffect, useState } from 'react';
import { NAVBAR_HEIGHT } from '../../../constants/other';
import { Input } from '../../base/Input/Input';
import './Auth.scss';
import { useTranslation, languageKeys } from '../../../services/translations';
import { useUser } from '../../../services/user';

const DEBOUNCE_TIMER: number = 500;
let emailTimeout: NodeJS.Timeout | null = null;
let passwordTimeout: NodeJS.Timeout | null = null;

export const AuthPage = () => {
    const [isLoginMode, setLoginMode] = useState(true);
    const [email, setEmail] = useState('');
    const [emailIsValid, setEmailIsValid] = useState(false);
    const [emailTouched, setEmailTouched] = useState(false);
    const [showEmailErrorMsg, setShowEmailError] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordIsValid, setPasswordIsValid] = useState(false);
    const [passwordTouched, setPasswordTouched] = useState(false);
    const [showPasswordError, setShowPasswordError] = useState(false);
    const { t } = useTranslation();

    const { loading, user, login, register } = useUser();

    useEffect(() => {
        setShowEmailError(false);
        if (emailTimeout) {
            clearTimeout(emailTimeout);
        }
        emailTimeout = setTimeout(() => {
            setShowEmailError(true);
        }, DEBOUNCE_TIMER)
    }, [email]);

    useEffect(() => {
        setShowPasswordError(false);
        if (passwordTimeout) {
            clearTimeout(passwordTimeout);
        }
        passwordTimeout = setTimeout(() => {
            setShowPasswordError(true);
        }, DEBOUNCE_TIMER)
    }, [password]);

    const handleModeChange = () => {
        setLoginMode((prevState) => {
            return !prevState;
        });
    }

    const handleEmailInput = (value: string) => {
        setEmail(value);
        validateEmail(value);
        setEmailTouched(true);
    }

    const handlePasswordInput = (value: string) => {
        setPassword(value);
        validatePassword(value);
        setPasswordTouched(true);
    }

    const validateEmail = (value: string) => {
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        if (value.match(regex)) {
            setEmailIsValid(true);
        }
        else {
            setEmailIsValid(false);
        }
    }

    const validatePassword = (value: string) => {
        if (value.length > 8) {
            setPasswordIsValid(true);
        }
        else {
            setPasswordIsValid(false);
        }
    }

    const handleFormSubmit = (event: any) => {
        if (!emailIsValid || !passwordIsValid) {
            return;
        }        

        if (isLoginMode) {
            login({email, password});
        }
        else {
            register({email, password});

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
                        onChange={(event) => handleEmailInput(event.target.value)} />
                    {!emailIsValid && emailTouched && showEmailErrorMsg &&
                        <p style={{ color: 'red' }}>{t(languageKeys.authentication.emailInvalid)}</p>
                    }
                    <Input labelValue={t(languageKeys.authentication.password)}
                        value={password}
                        type='password'
                        onChange={(event) => handlePasswordInput(event.target.value)} />
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
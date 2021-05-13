import { translate } from './index';
import { useSelector, useDispatch } from "react-redux";
import { LanguageState } from "./types";
import { useCallback } from "react";
import { updateLanguage } from './actions';
import { LANGUAGE_KEY } from './initialState';

const useTranslation = () => {
    const {languageKey} = useSelector((globalState: {
        language: LanguageState
    }) => globalState.language);

    const t = useCallback((tranlationKey: string) => {
        return translate(languageKey, tranlationKey);
    }, [languageKey]);

    const dispatch = useDispatch();

    const setLanguage = (val: string) => {
        dispatch(updateLanguage(val));
        localStorage.setItem(LANGUAGE_KEY, val);
    }

    return {
        t,
        setLanguage,
        languageKey
    }
};

export default useTranslation;
import { UPDATE_LANGUAGE } from "./actionTypes";

export const updateLanguage = (languageKey: string) => ({
    type: UPDATE_LANGUAGE,
    payload: languageKey
});

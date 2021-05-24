import { useEffect, useState } from 'react';

const DEBOUNCE_TIMER = 500;
let emailTimeout: NodeJS.Timeout | null = null;
const useInput = (validate: (text: string) => boolean) => {
    const [enteredValue, setValue] = useState('');
    const [valueTouched, setValueTouched] = useState(false);
    const [showError, setShowError] = useState(false);

    useEffect(() => {
        setShowError(false);
        if (emailTimeout) {
            clearTimeout(emailTimeout);
        }
        emailTimeout = setTimeout(() => {
            setShowError(true);
        }, DEBOUNCE_TIMER);
    }, [enteredValue]);

    const handleInput = (value: string) => {
        setValue(value);
        setValueTouched(true);
    };

    const isValid: boolean = validate(enteredValue);

    return { enteredValue, valueTouched, isValid, showError, setInputValue: handleInput };
};

export default useInput;
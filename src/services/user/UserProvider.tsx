import React from 'react';
import { useUser } from '.';
 
const UserProvider: React.FC = ({
    children
}) => {
    // Use user handles the login state
    // thus why I only need to envoke the hook

    useUser();
    return (
        <>
            {children}
        </>
    );
};
 
export default UserProvider;
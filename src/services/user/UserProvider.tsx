import React from 'react';
import { useUser } from '.';

export type UserProviderProps = {
    children: React.ReactChild | React.ReactChild[]
};

const UserProvider: React.FC<UserProviderProps> = ({
    children
}: UserProviderProps) => {
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
import React, { useState, useContext } from 'react';

const Authcontext = React.createContext();

export function UserAuth() {
    const context = useContext(Authcontext);
    return context;
}

export function AuthContextProvider({ children }) {
    const [openFormLogin, setOpenFormLogin] = useState(false);
    const [openFormLogout, setOpenFormLogout] = useState(false);
    const tokenStr = JSON.parse(localStorage.getItem('tokenStr'));
    const value = {
        tokenStr,
        openFormLogin,
        setOpenFormLogin,
        openFormLogout,
        setOpenFormLogout,
    };
    return <Authcontext.Provider value={value}>{children}</Authcontext.Provider>;
}

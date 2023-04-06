import React from 'react';
import BackToHome from "@/app/component/BackToHome";

const Layout = ({children}: {children: React.ReactNode}) => {
    return (
        <>
            {children}
            <BackToHome/>
        </>
    );
};

export default Layout;
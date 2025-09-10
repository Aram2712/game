
import { createContext, useContext, useState } from "react";


const AppContext = createContext(undefined);

export const AppProvider = ({ children }) => {

    const [headerData, setHeaderData] = useState([
        {
            id: 1,
            title: 'Home',
            link: 'home',
            href: '/',
            active: false
        },
        {
            id: 2,
            title: 'Features',
            link: 'features',
            href: '',
            active: false
        },
        {
            id: 3,
            title: 'FAQ',
            link: 'faq',
            href: '',
            active: false
        },
        {
            id: 4,
            title: 'Purchase',
            link: '',
            href: '/purchase',
            active: false
        },
        {
            id: 5,
            title: 'Discord',
            link: '',
            href: '',
            active: false
        },
    ]);

    return (
        <AppContext.Provider
            value={{
                headerData, setHeaderData
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useGlobalContext must be used as an context');
    }
    return context;
}

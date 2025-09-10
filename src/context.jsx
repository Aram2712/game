
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

    const [card, setCard] = useState([]);


    const [productData, setProductData] = useState([
        {
            id: 1,
            name: 'Product 1',
            type: 'Addons',
            price: 999,
            cardCount: 0
        },
        {
            id: 2,
            name: 'Product 2',
            type: 'Subscriptions',
            price: 499,
            cardCount: 0
        },
        {
            id: 3,
            name: 'Product 3',
            type: 'CS:GO accounts',
            price: 699,
            cardCount: 0
        },
        {
            id: 4,
            name: 'Product 4',
            type: 'Hourbooster',
            price: 559,
            cardCount: 0
        },
        {
            id: 5,
            name: 'Product 5',
            type: 'CS:GO accounts',
            price: 750,
            cardCount: 0
        },
        {
            id: 6,
            name: 'Product 6',
            type: 'Subscriptions',
            price: 299,
            cardCount: 0
        },
        {
            id: 7,
            name: 'Product 7',
            type: 'Addons',
            price: 199,
            cardCount: 0
        },
        {
            id: 8,
            name: 'Product 8',
            type: 'Subscriptions',
            price: 899,
            cardCount: 0
        },
        {
            id: 9,
            name: 'Product 9',
            type: 'CS:GO accounts',
            price: 459,
            cardCount: 0
        },
        {
            id: 10,
            name: 'Product 10',
            type: 'Subscriptions',
            price: 819,
            cardCount: 0
        },
        {
            id: 11,
            name: 'Product 11',
            type: 'Addons',
            price: 259,
            cardCount: 0
        },
        {
            id: 12,
            name: 'Product 12',
            type: 'Subscriptions',
            price: 399,
            cardCount: 0
        },
        {
            id: 13,
            name: 'Product 13',
            type: 'Addons',
            price: 579,
            cardCount: 0
        },
        {
            id: 14,
            name: 'Product 14',
            type: 'Subscriptions',
            price: 619,
            cardCount: 0
        },
        {
            id: 15,
            name: 'Product 15',
            type: 'Addons',
            price: 259,
            cardCount: 0
        },
        {
            id: 16,
            name: 'Product 16',
            type: 'Subscriptions',
            price: 919,
            cardCount: 0
        }
    ]);


    return (
        <AppContext.Provider
            value={{
                headerData, setHeaderData,
                card, setCard,
                productData, setProductData
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

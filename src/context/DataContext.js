import React, {useState, createContext} from 'react';
import uuid from 'react-uuid';

export const DataContext = createContext();

const initialCategories = [
    {
        id: uuid(),
        name: 'Drink'
    },
    {
        id: uuid(),
        name: 'Sandwitch'
    }
];

const initialProducts = [
    {
        id: uuid(),
        name: 'Cold Coffee',
        price: '99',
        category: {
            id: initialCategories[0].id
        }
    },
    {
        id: uuid(),
        name: 'Grilled Sandwitch',
        price: '49',
        category: {
            id: initialCategories[1].id
        }
    },
];

const initialOrders = [
    {
        id: uuid(),
        number: 1001,
        items: 3,
        total: '299',
        date: '2021-01-07T17:18:10+05:30',
        status: 'Paid'
    },
    {
        id: uuid(),
        number: 1002,
        items: 1,
        total: '49',
        date: '2021-05-07T14:14:32+05:30',
        status: 'Unpaid'
    }
];

const DataProvider = ({children}) => {
    const [products, setProducts] = useState(initialProducts);
    const [categories, setCategories] = useState(initialCategories);

    const _products = products.map((product) => {
        const category = product.category && categories.find((category) => category.id === product.category.id)
        return{
            ...product,
            category: category
        }
    })

    return (
        <DataContext.Provider value={{orders: initialOrders, products: _products, categories, setProducts, setCategories}}>
        {children}
        </DataContext.Provider>
    );
}

export default DataProvider;
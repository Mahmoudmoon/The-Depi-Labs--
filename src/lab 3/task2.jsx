import React, { createContext, useState } from 'react';

// Create Context
const DataContext = createContext();

// Create a Provider Component
const DataProvider = ({ children }) => {
    const [data, setData] = useState({
        prop1: 'Value 1',
        prop2: 'Value 2',
        prop3: 'Value 3',
        prop4: 'Value 4',
        prop5: 'Value 5',
    });

    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    );
};

export { DataContext, DataProvider };

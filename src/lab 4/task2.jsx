import React, { createContext, useState } from 'react';

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [data] = useState({
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

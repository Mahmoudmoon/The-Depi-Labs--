
import React from 'react';
import { DataContext } from './DataContext';

const ComponentThree = () => {
    const data = React.useContext(DataContext);

    return (
        <div>
            <h2>Component Three</h2>
            <p>Prop 3: {data.prop3}</p>
        </div>
    );
};

export default ComponentThree;

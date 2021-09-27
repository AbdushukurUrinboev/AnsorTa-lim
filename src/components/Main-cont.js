import React, { createContext, useState } from 'react';

export const TestContext = createContext();

export const TestProvider = (props) => {
    const [kurs, setKurs] = useState(false);
    return (
        <TestContext.Provider value={[kurs, setKurs]}>
            {props.children}
        </TestContext.Provider>
    )
}

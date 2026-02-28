import React, { createContext } from 'react'

const SeprateContext = createContext();
export function SeprateProvider({children}) {
    return (
        <>
            <SeprateContext.Provider value="xyz">
                {children}
            </SeprateContext.Provider>
        </>
    )
}

export default SeprateContext;

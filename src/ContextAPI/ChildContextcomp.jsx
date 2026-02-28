import React, { useContext } from 'react'
import FamilyContext from './FamilyContext'

function ChildContextcomp() {
    const data = useContext(FamilyContext);
    console.log(data.name);
    
    return (
        <>
        <h3>ChildContextcomp {data.id}</h3>
        </>
    )
}

export default ChildContextcomp

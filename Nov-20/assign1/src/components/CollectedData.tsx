import React, { useContext, useState } from 'react'
import { StudentContext } from '../contextapi/Student.context'

const CollectedData: React.FC = () => {
    const context = useContext(StudentContext);
    const [show, setShow] = useState(false);

    if(!context) {
        return <p>No data avaibable</p>
    }

    const { first_name, last_name, grade } = context;

    if(first_name && last_name && grade) {
        setTimeout(() => {
            setShow(true);
        }, 3000)
    }

    if(!first_name || !last_name || !grade) {
        return (
            <></>
        )
    }

    return (
        <header>
            {show && <nav>
                <div>{first_name}</div>
                <div>{last_name}</div>
                <div>{grade}</div>
            </nav>}
        </header>
    )
}

export default CollectedData;
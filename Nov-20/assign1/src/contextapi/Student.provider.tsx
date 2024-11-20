import React, { useState } from 'react'
import { StudentContext } from './Student.context';

type StudentProp = { children: React.ReactNode };

const StudentProvider: React.FC<StudentProp> = ({children}) => {
    const [first_name, setFirst_name] = useState("");
    const [last_name, setLast_name] = useState("");
    const [grade, setGrade] = useState("");

    const value = {
        first_name,
        last_name,
        grade,
        setFirst_name,
        setLast_name,
        setGrade
    };

    return (
        <StudentContext.Provider value={value}>
            {children}
        </StudentContext.Provider>
    );
}

export default StudentProvider;
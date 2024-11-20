import { createContext } from 'react';

export interface StudentType {
    first_name: string,
    last_name: string,
    grade: string,
    setFirst_name: (name: string) => void,
    setLast_name: (name: string) => void,
    setGrade: (grade: string) => void
}

export const StudentContext = createContext<StudentType | null>(null);

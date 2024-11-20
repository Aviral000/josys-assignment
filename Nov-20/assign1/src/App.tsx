import React, { useContext } from 'react';
import StudentProvider from './contextapi/Student.provider';
import { StudentContext } from './contextapi/Student.context';
import CollectedData from './components/CollectedData';

const StudentForm = () => {
  const context = useContext(StudentContext);

  if (!context) {
    throw new Error('StudentForm must be used within a StudentProvider');
  }

  const { 
    first_name, 
    last_name, 
    grade, 
    setFirst_name, 
    setLast_name, 
    setGrade 
  } = context;

  return (
    <div className="p-4">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">First Name</label>
          <input
            type="text"
            value={first_name}
            onChange={(e) => setFirst_name(e.target.value)}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Last Name</label>
          <input
            type="text"
            value={last_name}
            onChange={(e) => setLast_name(e.target.value)}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Grade</label>
          <input
            type="text"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <StudentProvider>
      <CollectedData />
      <StudentForm />
    </StudentProvider>
  );
};

export default App;
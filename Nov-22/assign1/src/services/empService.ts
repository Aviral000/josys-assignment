import axios from 'axios';

const API_URL = 'http://localhost:3001';

export interface Employee {
  id?: number;
  name: string;
  department: string;
  position: string;
  salary: number;
  image?: string
}

export const getEmployees = () => {
  return axios.get(`${API_URL}/employees`);
};

export const addEmployee = (employeeData: Omit<Employee, 'id'>) => {
  return axios.post(`${API_URL}/employees`, employeeData);
};

export const updateEmployee = (id: number, employeeData: Partial<Employee>) => {
  return axios.put(`${API_URL}/employees/${id}`, employeeData);
};

export const deleteEmployee = (id: number) => {
  return axios.delete(`${API_URL}/employees/${id}`);
};

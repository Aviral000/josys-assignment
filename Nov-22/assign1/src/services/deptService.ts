import axios from 'axios';

const API_URL = 'http://localhost:3001';

export interface Department {
  id?: number;
  name: string;
  description: string;
  employeeCount: number;
  location?: string;
  manager?: string;
  budget?: number;
  createdAt?: string;
  updatedAt?: string;
}

export const getDepartments = () => {
  return axios.get(`${API_URL}/departments`);
};

export const getDepartmentById = (id: number) => {
  return axios.get(`${API_URL}/departments/${id}`);
};

export const addDepartment = (departmentData: Omit<Department, 'id'>) => {
  return axios.post(`${API_URL}/departments`, {
    ...departmentData,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  });
};

export const updateDepartment = (id: number, departmentData: Partial<Department>) => {
  return axios.put(`${API_URL}/departments/${id}`, {
    ...departmentData,
    updatedAt: new Date().toISOString()
  });
};

export const deleteDepartment = (id: number) => {
  return axios.delete(`${API_URL}/departments/${id}`);
};

export const getDepartmentsWithEmployeeCount = async () => {
  try {
    const [departmentsRes, employeesRes] = await Promise.all([
      axios.get(`${API_URL}/departments`),
      axios.get(`${API_URL}/employees`)
    ]);

    const departments = departmentsRes.data.map((dept: Department) => {
      const count = employeesRes.data.filter(
        (emp: any) => emp.department === dept.name
      ).length;
      return { ...dept, employeeCount: count };
    });

    return { data: departments };
  } catch (error) {
    throw error;
  }
};

export const getEmployeesByDepartment = (departmentId: number) => {
  return axios.get(`${API_URL}/employees`, {
    params: { department: departmentId }
  });
};

export const searchDepartments = (searchTerm: string) => {
  return axios.get(`${API_URL}/departments`, {
    params: {
      q: searchTerm
    }
  });
};

export const batchUpdateDepartments = (updates: Array<{ id: number; data: Partial<Department> }>) => {
  return Promise.all(
    updates.map(update => 
      updateDepartment(update.id, update.data)
    )
  );
};
interface EmployeeList {
    name: string,
    job: string,
    salary: number,
    depttNo: number
}

class Employee {
    name: string;
    job: string;
    salary: number;
    depttNo: number;
    numberOfEmployee: EmployeeList[] = [];
  
    constructor(name: string, job: string, salary: number, depttNo: number) {
      this.name = name;
      this.job = job;
      this.salary = salary;
      this.depttNo = depttNo;
    }

    addEmployee(name: string, job: string, salary: number, depttNo: number) {
        const newEmployee: EmployeeList = { name, job, salary, depttNo };
        this.numberOfEmployee.push(newEmployee);
    }

    getEmployee() {
        return this.numberOfEmployee;
    }
}

export { Employee };
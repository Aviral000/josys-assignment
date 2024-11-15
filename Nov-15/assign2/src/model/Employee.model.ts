interface EmployeeList {
    id: number,
    name: string,
    job: string,
    salary: number,
    depttNo: number
}

class Employee {
    id: number = 0;
    name: string;
    job: string;
    salary: number;
    depttNo: number;
    numberOfEmployee: EmployeeList[] = [];
  
    constructor(name: string, job: string, salary: number, depttNo: number) {
        this.id = this.id++;
        this.name = name;
        this.job = job;
        this.salary = salary;
        this.depttNo = depttNo;
    }

    // addEmployee(name: string, job: string, salary: number, depttNo: number) {
    //     const findDuplicate = this.numberOfEmployee.findIndex(emp => emp.name.toLowerCase() === name.toLowerCase());
    //     if(findDuplicate !== -1) {
    //         alert('Cannot add a same name employee twice');
    //         return;
    //     }
    //     const id = this.id++;
    //     const newEmployee: EmployeeList = { id, name, job, salary, depttNo };
    //     this.numberOfEmployee.push(newEmployee);
    // }

    // updateEmployee(name: string, job: string, salary: number, depttNo: number): void {
    //     const employeeIndex = this.numberOfEmployee.findIndex(
    //       (emp) => emp.name.toLowerCase() === name.toLowerCase()
    //     );
    
    //     if (employeeIndex !== -1) {
    //       this.numberOfEmployee[employeeIndex] = {
    //         ...this.numberOfEmployee[employeeIndex],
    //         job,
    //         salary,
    //         depttNo,
    //       };
    //     } else {
    //       alert("Employee not found.");
    //     }
    //   }

    //   deleteEmployee(id: number): void {
    //     const employeeIndex = this.numberOfEmployee.findIndex((emp) => emp.id === id);
      
    //     if (employeeIndex !== -1) {
    //       this.numberOfEmployee.splice(employeeIndex, 1);
    //     } else {
    //       alert("Employee not found.");
    //     }
    //   }

    getEmployee() {
        return this.numberOfEmployee;
    }
}

export { Employee };
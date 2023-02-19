import Department from "./Department";

class Employee {
    employeeId!: number;

    firstName!: string;

    lastName!: string;

    gender!: string;

    age!: number;

    email!: string;

    phoneNumber!: string;

    hireDate!: Date;

    salary!: number;

    createdBy!: string;

    departmentId!: Department;
}

export default Employee;

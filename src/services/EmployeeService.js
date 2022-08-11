import axios from 'axios';

const emp_base_url = "http://localhost:8080/api/v1/employees"

class EmployeeService {

    getEmployees(){
        return axios.get(emp_base_url);
    }

    createEmployee(employee){
        return axios.post(emp_base_url, employee);
    }

    getEmployeeById(employeeId){
        return axios.get(emp_base_url + '/' + employeeId);
    }

    updateEmployee(employee, employeeId){
        return axios.put(emp_base_url + '/' + employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(emp_base_url + '/' + employeeId);
    }
}

export default new EmployeeService()
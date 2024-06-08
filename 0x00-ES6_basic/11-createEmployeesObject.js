export default function createEmployeesObject(departmentName, employees) {
  const employeess = {
    [departmentName]: employees
  };
  
  return employeess;
}


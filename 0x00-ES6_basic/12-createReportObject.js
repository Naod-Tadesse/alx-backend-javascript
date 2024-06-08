export default function createReportObject(employeesList) {
  const getNumberOfDepartments = () => Object.keys(employeesList).length;
  
  const report = {
    allEmployees: {
      ...employeesList
    },
    getNumberOfDepartments
  };

  return report;
}


export default function createIteratorObject(report) {
  // Generator function to iterate over all employees in all departments
  function* employeeGenerator() {
    for (const department of Object.values(report.allEmployees)) {
      for (const employee of department) {
        yield employee;
      }
    }
  }

  // Return the generator object
  return employeeGenerator();
}

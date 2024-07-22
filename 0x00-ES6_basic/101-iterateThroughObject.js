export default function iterateThroughObject(reportWithIterator) {
  // Initialize an empty array to collect employee names
  const employeeNames = [];

  // Iterate through the iterator object
  for (const employee of reportWithIterator) {
    // Push each employee name into the array
    employeeNames.push(employee);
  }

  // Join the names with ' | ' and return the result
  return employeeNames.join(' | ');
}

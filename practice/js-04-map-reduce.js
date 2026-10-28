const employees = [
  { code: "EMP001", name: "Ravi", department: "Sales", salary: 25000, isActive: true },
  { code: "EMP002", name: "Neha", department: "HR", salary: 30000, isActive: true },
  { code: "EMP003", name: "Amit", department: "Sales", salary: 22000, isActive: false },
  { code: "EMP004", name: "Sara", department: "Support", salary: 20000, isActive: true },
];

// map: har employee se ek cheez nikaalo
const names = employees.map((emp) => emp.name);
console.log(names);

const labels = employees.map((emp) => `${emp.code} - ${emp.name}`);
console.log(labels);

// reduce: sab ko jodke ek total banao
const totalPayroll = employees.reduce((sum,emp) => sum + emp.salary , 0);
console.log(`TotalPyroll: ${totalPayroll}`);

// filter + reduce saath mein (chaining)
const activePayroll = employees.filter((emp) => emp.isActive === true)
.reduce((sum,emp) => sum + emp.salary, 0);
console.log(`Active payroll : ${activePayroll}`);

// filter + reduce for sales dept
const salespayroll = employees.filter((emp) => emp.department === "Sales").reduce((sum,emp) => sum + emp.salary,0);
console.log(`Sales Payroll: ${salespayroll}`);

const Activemps = employees.filter((emp) => emp.isActive === true).map((emp) => emp.name);
console.log(`Active Employees: ${Activemps}`);
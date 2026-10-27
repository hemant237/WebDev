const employees = [
    {code: "EMP001", name: "Ravi", department: "Sales", salary: 25000, isActive: true},
    {code: "EMP002", name: "Neha", department: "HR", salary: 30000, isActive: true},
    {code: "EMP003", name: "Amit", department: "Sales", salary: 22000, isActive: false},
];

console.log(employees.length);
console.log(employees[0].name);


employees.push({
code: "EMP004",
name: "Sara",
department: "Support",
salary: 20000,
isActive: true,
});

for (const emp of employees) {
    console.log(`${emp.code}- ${emp.name} (${emp.department})`);
}

const SalesTeam = employees.filter((emp) => emp.department==="Sales")
console.log(`SalesTeam: ${SalesTeam.length}`);

const ActiveEmployees = employees.filter((emp) => emp.isActive === true);
console.log(`ActiveEmployees: ${ActiveEmployees.length}`);


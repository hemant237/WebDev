const employees = [
  { code: "EMP001", name: "Ravi", department: "Sales", salary: 25000, isActive: true },
  { code: "EMP002", name: "Neha", department: "HR", salary: 30000, isActive: true },
  { code: "EMP003", name: "Amit", department: "Sales", salary: 22000, isActive: false },
  { code: "EMP004", name: "Sara", department: "Support", salary: 20000, isActive: true },
];

// 1) if / else if / else
function getdiscountpercent(amount) {
    if (amount>=100000) {
        return 10;
    }
    else if (amount >= 50000) {
        return 5;
    }
    else  {
        return 0;
    }
}

console.log(getdiscountpercent(120000));
console.log(getdiscountpercent(60000));
console.log(getdiscountpercent(20000));

// 2) ternary: chhota if/else
for (const emp of employees) {
    const status = emp.isActive ? "Active" : "InActive";
    console.log(`${emp.name} : ${status}`);
}

// 3) && (dono shart sach honi chahiye)
for (const emp of employees) {
    if (emp.department==="Sales" && emp.isActive) {
        console.log(`${emp.name} is an active sales person`)
    }
}

// 4) classic for loop (jab index chahiye)
for (let i=0;i < employees.length;i++) {
    console.log(`${i +1}. ${employees[i].name}`)
}

// 5) while loop
let count =1;
while (count <= 3) {
    console.log(`Round ${count}`);
    count = count + 1;
}

// 6) switch
function describestatus(code) {
    switch(code) {
        case 200:
            return "OK";
        case 404:
            return "NotFound";
        case 500:
            return "Server Error";
        default :
        return "UnKnown Error";            
    }
}

// Ravi: Medium
// Neha: High
// Amit: Medium
// Sara: Low

console.log(describestatus(404));
console.log(describestatus(418));

function getsalaryband(salary) {
    for (const emp of employees) {
      if ( emp.salary>=30000) {
        console.log("High");
      }
      else if (emp.salary >=20000) {
        console.log("Medium")
      }
      else {
        console.log("Low"); }
}
}

console.log(getsalaryband(employees));

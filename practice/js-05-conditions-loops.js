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




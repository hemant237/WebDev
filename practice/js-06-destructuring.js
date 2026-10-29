const emp = {
  code: "EMP001",
  name: "Ravi",
  department: "Sales",
  salary: 25000,
  bonus: 0,
  manager: { name: "Neha" },
};
const sara = {
  code: "EMP004",
  name: "Sara",
  department: "Support",
  salary: 20000,
  bonus: null,
  manager: null,
};

// 1) destructuring
const {name ,salary} = emp;
console.log(name,salary);

const {code : employeecode} = emp;
console.log(employeecode);

const names = ["Ravi","Neha","Pooja"];
const [first,second] = names;
console.log(first,second);

// function ke parameter mein destructuring
function printEmployee({name,department}) {
    console.log(`${name} works in ${department}`);
}

printEmployee(emp);

//2) spread aur rest
const raised = {...emp,salary:28000};
console.log(emp.salary,raised.salary);

const morePeople = [...names,"sara"]
console.log(morePeople)

const {code,...others} = emp;
console.log(others.name);
console.log(code);

// 3) optional chaining
console.log(emp.manager?.name);
console.log(sara.manager?.name);

// 4)nullish
console.log(emp.bonus || 500)
console.log(emp.bonus ?? 500)
console.log(sara.bonus ?? 500)

// console.log(getManagerName(emp));    // Neha
// console.log(getManagerName(sara));   // No manager
// ?. aur ??


function getManagerName(employee) {
    return employee.manager?.name ?? "No manager";

} 
console.log(getManagerName(emp));    // Neha
console.log(getManagerName(sara));   // No manager





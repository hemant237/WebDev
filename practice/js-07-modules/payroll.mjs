export function gettotalPayroll(employees) {
    return employees.reduce((sum,emp) => sum + emp.salary,0)
}
import { employees } from "./employees.mjs";
import { getSalaryBand, getDiscountPercent } from "./salaryUtils.mjs";
import formatMoney from "./formatMoney.mjs";
import { gettotalPayroll } from "./payroll.mjs";

for (const emp of employees) {
  console.log(`${emp.name}: ${getSalaryBand(emp.salary)} (${formatMoney(emp.salary)})`);
}

console.log(getDiscountPercent(120000));

console.log(gettotalPayroll(employees) * 12);




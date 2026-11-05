export function getSalaryBand(salary) {
  if (salary >= 30000) {
    return "High";
  } else if (salary >= 22000) {
    return "Medium";
  } else {
    return "Low";
  }
}

export function getDiscountPercent(amount) {
  if (amount >= 100000) {
    return 10;
  } else if (amount >= 50000) {
    return 5;
  } else {
    return 0;
  }
}
// 1) ek nakli "database query" jo 1 second leti hai
function fakeDbQuery() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { code: "EMP001", name: "Ravi" },
        { code: "EMP002", name: "Neha" },
      ]);
    }, 1000);
  });
}

// 2) bina await: data nahi, sirf token (Promise) milta hai
const promise = fakeDbQuery();
console.log(promise);



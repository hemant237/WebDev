function fakeDbQuery() {
  return new Promise((resolve) => {

    setTimeout(() => {
      resolve([
        { code: "EMP001", name: "Ravi" },
        { code: "EMP002", name: "Neha" },
      ]);
    }, 2000);

  });
}

//  console.log(await fakeDbQuery());

 async function getEmployees() {

    const employees = await fakeDbQuery();

    console.log(employees);

}

getEmployees();


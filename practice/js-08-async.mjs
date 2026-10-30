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

// 3) await ke saath: asli data milta hai
async function showEmployees() {
  console.log("Query shuru...");
  const employees = await fakeDbQuery();
  console.log("Query khatam");
  console.log(employees.map((emp) => emp.name));
}

await showEmployees();

// 4) error sambhalna: try / catch
function fakeFailingQuery() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Database connection failed")), 500);
  });
}

async function safeLoad() {
  try {
    const data = await fakeFailingQuery();
    console.log(data);
  } catch (error) {
    console.log(`Error pakda: ${error.message}`);
  }
}

await safeLoad();

// 5) asli internet API: fetch
async function getUser(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }
  const user = await response.json();
  return user;
}

const user = await getUser(1);
console.log(user.name);
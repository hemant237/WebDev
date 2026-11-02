function loginUser(email,password) {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      if (email === "admin@gmail.com" && password === "12345") {
        resolve({
            message: "Login Successful",
            user: email,
            role:"Admin"  
        });
      }else {
          reject ("Invalid Email or Password"); 
      }
    },2000);
  });
}



loginUser("admin@gmail.om","12345").then((result) => {
  console.log(result);
}).catch((error)=>{
  console.log(error);
});


function getproduct(productid) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const products = [
        {id:101,name:"laptop",price:55000},
        {id:102,name:"Mobile",price:25000},
        {id:103,name:"Keyboard",price:1500}
      ];
      const product = products.find((item) => item.id === productid);

      resolve(product);
    },1500);
  });
}

getproduct(102).then((product) => {
  console.log(product)
});


function processpayment(amount) {
  return new Promise ((resolve,reject) => {
    setTimeout(() => {
      if (amount > 0) {
        resolve({
          transactionid:"TNX001",
          amount: amount,
          status:"Payment Successful"
        });
      } else {reject("invalid payment amount")};
    },3000
    )
  });
}

processpayment(5000).then((payment) => {console.log(payment);}).catch
((error) => {console.log(error); });

function getEmployees() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve([
                { id: 1, name: "Ravi", salary: 25000 },
                { id: 2, name: "Neha", salary: 30000 },
                { id: 3, name: "Amit", salary: 28000 }
            ]);

        }, 2000);

    });

}

async function calculatePayroll() {
  const employees = await getEmployees();

  const totalsalary = employees.reduce((sum,emp) => {
    return sum + emp.salary;
  },0);
    console.log("Total payroll:",totalsalary);
}

calculatePayroll();

function verifyorder() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Order Verified Successfully");
    },1000);
  });
}

function makepayment() {
  return new Promise((resolve) => {
  setTimeout(() => {
     resolve("Payment Done successfully");
  },2000);
});
}

function dispatchorder() {
  return new Promise((resolve) => {
  setTimeout(() => {
    resolve("Order Dispatched");
  }
  ,1500);
});
}

async function Placeorder() {
  const order = await verifyorder();
  console.log(order);

  const payment = await makepayment();
  console.log(payment);

  const dispatch = await dispatchorder();
  console.log(dispatch);
}

Placeorder();

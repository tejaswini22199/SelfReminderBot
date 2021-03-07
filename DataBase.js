


  const Sequelize = require("sequelize-cockroachdb");
const fs = require("fs");
const { username, password } = require("./config.json");
const { where } = require("sequelize-cockroachdb");
var sequelize = new Sequelize({
  dialect: "postgres",
  username,
  password,
  host: "free-tier.gcp-us-central1.cockroachlabs.cloud",
  database: "smoggy-monkey-1158.defaultdb",
  port: 26257,
  dialectOptions: {
    ssl: {
      ca: fs.readFileSync("./certs/cc-ca.crt").toString(),
    },
  },
  logging: false,
});

// const Account = sequelize.define("accounts", {
//   id: {
//     type: Sequelize.INTEGER,
//     primaryKey: true,
//   },
//   balance: {
//     type: Sequelize.INTEGER,
//   },
// });
const Tasks=sequelize.define("Tasks",{
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  stringValue: {
    type: Sequelize.STRING,
  },
})
Tasks.sync({
  force:true,
})
.then(function () {
  // Insert two rows into the "accounts" table.
  return Tasks.bulkCreate([
    {
      id: 1,
      stringValue: "water your plants",
      
    },
    {
      id: 2,
      stringValue: "Go call your old friend and talk to them",
      
    },
    {
      id: 3,
      stringValue: "Create a drawing of your best friend",
      
    },
    {
      id: 4,
      stringValue: "Watch Your favourite series",
      
    },
    {
      id: 5,
      stringValue: "Dance your heart out",
      
    },
    {
      id:6 ,
      stringValue: "sing a song",
      
    },
  ]);
})
.then(function () {
  // Retrieve accounts.
  
  return Tasks.findAll();
 
})
.then(function (tasks) {
  // Print out the balances.
  tasks.forEach(function (account) {
    console.log(account.id + " " + account.stringValue);
  });
  process.exit(0);
})
.catch(function (err) {
  console.error("error: " + err.message);
  process.exit(1);
});



// Account.sync({
//   force: true,
// })
  // .then(function () {
  //   // Insert two rows into the "accounts" table.
  //   return Account.bulkCreate([
  //     {
  //       id: 1,
  //       balance: 1000,
  //     },
  //     {
  //       id: 2,
  //       balance: 250,
  //     },
  //   ]);
  // })
  // .then(function () {
  //   // Retrieve accounts.
  //   return Account.findAll();
  // })
  // .then(function (accounts) {
  //   // Print out the balances.
  //   accounts.forEach(function (account) {
  //     console.log(account.id + " " + account.balance);
  //   });
  //   process.exit(0);
  // })
  // .catch(function (err) {
  //   console.error("error: " + err.message);
  //   process.exit(1);
  // });



// // const express = require('express');
// // const app = express();
// // const port = 5000;
// // const cors=require("cors");
// // app.use(cors());
// // app.use(express.json());
// // app.get('/', (req, res) => {

// //     res.send('Hello, world!');
// // });

// // app.listen(port, () => {
// //     console.log(`Server listening on port ${port}`);
// // });
// const express=require('express')
// const app=express()
// app.get("/",(req,res) =>{
// res.json({"users":["userOne",]})
// res.send("welcome to this page");
// })
// app.listen(5000,()=>{
//     console.log("server listening");
// })

const fs = require("fs");
const cors = require("cors");
const express = require("express");
const PythonShell = require("python-shell").PythonShell;

const PORT = 5000;
const app = express();

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.post("/python", (req, res) => {
  fs.writeFileSync("test.py", req.body.code);
  PythonShell.run("test.py").then((data)=>{
    return res.send({
      codeOutput:data
    })
  })
  /* const testCases = {
    one: [1, 2, 3],
    two: [2, 2, 4],
    three: [2, -2, 0],
  };

  const promises = [];
  const testCaseResults = [];

  Object.keys(testCases).map((key) => {
    promises.push(
      new Promise((resolve, reject) => {
        PythonShell.run(
          "test.py",
          {
            mode: "text",
            pythonOptions: ["-u"],
            args: testCases[key],
          },
          function (err, results) {
            if (err) {
              reject();
              throw err;
            }
            console.log(results);
            testCaseResults.push(results[0]);
            resolve(true);
          }
        );
      })
    );
  });

  Promise.all(promises).then(() => {
    res.send({ testCaseResults });
  }); */
});
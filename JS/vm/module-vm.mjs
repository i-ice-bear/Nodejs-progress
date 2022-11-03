import express from "express";
import vm from "node:vm";
import process from "dotenv";

const context = {
  express: express,
};

vm.createContext(context);

const code = `
  const app = express()
  const port = 3000
  app.get('/', (req, res) => {
    res.send('Hello, kitty!')
  })
  app.listen(port)
  `;

vm.runInContext(code, context);

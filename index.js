const express = require('express')

const app = express()
const chalk = require('chalk')
app.get('/', (req,res) => {
  res.status(201).json({message:"yo!"})
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
  const serverRunMsg = `Server is active and listening on http://127.0.0.1:${port}`;
  console.log(chalk.green(serverRunMsg));
});
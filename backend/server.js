import express from "express";

const app = express();

app.use(express.json());


app.post("/sum", (req, res) => {
    const firstNumber = parseInt(req.body.firstNumber);
    const secondNumber = parseInt(req.body.lastNumber);

    const sum = firstNumber + secondNumber;
    
    res.json(sum);
})

const PORT =  5000;

app.listen(
  PORT,
  console.log(`Server is running  at port ${PORT}`)
);

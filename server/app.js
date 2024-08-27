import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();

dotenv.config()

app.use(express.json())
app.use(cors());

app.get('/',(req,res) =>{
    res.send('This is Home Page')
})

const PORT = 8081

app.listen(PORT,() =>{
    console.log(`Server is running in ${PORT}`)
})

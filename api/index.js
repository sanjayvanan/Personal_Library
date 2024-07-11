import express from 'express';
import mongoose from 'mongoose'
import bookRouter from './routes/books.route.js'
const app = express();

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/personal_library").then(()=>{
    console.log("database connected sucessfully");
}).catch((e)=>{
    console.log(e);
})

app.use("/api/books",bookRouter);

app.listen(3001,()=>{console.log("server running on 3001")});
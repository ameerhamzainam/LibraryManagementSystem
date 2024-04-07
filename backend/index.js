import express, { response } from "express";
// import { PORT } from "./config.js";
import { config } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/BookModel.js";
import bookRoute from './routes/booksRoute.js';
import { Borrow } from "./models/BorrowModel.js";
import borrowRoute from './routes/borrowsRoute.js';
import searchrouter from "./routes/search.js";
import cors from 'cors';



const app = express();

//middleware for parsing request body
app.use(express.json());

//middleware for handling cors policy
//option 1: Allow all Origins with deafult of cors(*)
app.use(cors());
//OPtion 2: Allow custom Origins to have more better control
// app.use(
//     cors({
//         origin: 'http://localhost:3000',
//         method: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type'],
//     })
// );


app.get('/', (request, response) => {
    console.log(request);
    return response.status(200).send(config)

});//checking port connection

app.use('/books', bookRoute);
app.use('/borrows', borrowRoute);
app.use('/search',searchrouter);

//to connect database we use mongoose below

mongoose
    .connect(config.MONGOURL)
    .then(() => {
        console.log('App connected to DataBase');
        app.listen(config.PORT, () => {
            console.log(`Port Running is ${config.PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    })


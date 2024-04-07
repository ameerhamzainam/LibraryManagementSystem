import express from "express";
import { Book } from "../models/BookModel.js";


const router = express.Router();


router.get('/', async (req, res) => {
    try {
        const title = req.query.title;
        // const regex = 
        console.log(title);
        const results = await Book.find({ title: { $regex: new RegExp(title, 'i') } });
        console.log(results)
        res.status(200).json({
            count: results.length,
            search_results: results,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

export default router;

import express from "express";
import { Borrow } from "../models/BorrowModel.js";
const router = express.Router();

//Route for saving the new Borrower
router.post('/', async (request, response) => {
    try {
        if (
            !request.body.bookId ||
            !request.body.name ||
            !request.body.phoneNumber ||
            !request.body.issueDate ||
            !request.body.returnDate


        ) {
            return response.status(400).send({
                message: "Send all the required fields",
            });
        }
        const newBorrow = {
            bookId: request.body.bookId,
            name: request.body.name,
            phoneNumber: request.body.phoneNumber,
            issueDate: request.body.issueDate,
            returnDate: request.body.returnDate
        };

        const borrow = await Borrow.create(newBorrow);
        return response.status(201).send(borrow);

    }
    catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
});

//route to get all the borrow
router.get('/', async (request, response) => {
    try {
        const borrow = await Borrow.find({})
        return response.status(200).json({
            count: borrow.length,
            data: borrow
        });
    }
    catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//route to get a single borrow by its id

router.get('/:id', async (request, response) => {
    try {

        const { id } = request.params;

        const borrow = await Borrow.findById(id)
        return response.status(200).json(borrow);
    }
    catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//route for update a borrow

router.put('/:id', async (request, response) => {
    try {
        if (
            !request.body.bookId ||
            !request.body.name ||
            !request.body.phoneNumber ||
            !request.body.issueDate ||
            !request.body.returnDate

        ) {
            return response.status(400).send({
                message: 'Send all the Required fields',
            });
        }

        const { id } = request.params;

        const result = await Borrow.findByIdAndUpdate(id, request.body);

        if (!result) {
            return response.status(404).json({ message: 'Borrower not found' });
        }
        return response.status(200).send({ message: 'Borrower Updated Succesfully' });
    }
    catch (error) {
        console.log(error.message);
        return response.status(500).send({ message: error.message });
    }
});


//route to delete a borrow by its id

router.delete('/:id', async (request, response) => {
    try {

        const { id } = request.params;

        const result = await Borrow.findByIdAndDelete(id);
        if (!result) {
            return response.status(404).json({ message: ' Borrower not Found' });
        }
        return response.status(200).send({ message: ' Borrower Deleted Successfully' })
    }
    catch (error) {
        console.log(error.message);
        return response.status(500).send({ message: error.message });
    }
})

export default router;
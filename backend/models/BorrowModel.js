import mongoose from 'mongoose';


const BorrowSchema = mongoose.Schema(
    {
        bookId:{
            type: String,
            required:true,
        },
        name:{
            type: String,
            required:true,
        },
        phoneNumber:{
            type: String,
            required:true,
        },
        issueDate:{
            type: Date,
            required:true,
        },
        returnDate:{
            type: Date,
            required:true,
        }
    },
    //end of a book object main details
    {
        timestamps: true,
    }
)




export const Borrow = mongoose.model('Borrow', BorrowSchema);
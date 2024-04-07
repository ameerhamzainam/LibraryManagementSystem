import mongoose from 'mongoose';


const BookSchema = mongoose.Schema(
    {
        title:{
            type: String,
            required:true,
        },
        author:{
            type: String,
            required:true,
        },
        publishYear:{
            type: String,
            required:true,
        }
    },
    //end of a book object main details
    {
        timestamps: true,
    }
)




export const Book = mongoose.model('Book', BookSchema);
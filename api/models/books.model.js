import mongoose from 'mongoose'

const bookSchema = new mongoose.Schema({
    bookName : {
        type : "String",
        required: true,
    },
    pageNo :{
        type : "Number",
        required:true
    },
    isCompleted:{
        type : "Boolean",
        default: false
    },
    isBookmarked:{
        type : "Boolean",
        default: false
    }
},{timestamps:true});

const Books = mongoose.model("Book",bookSchema);

export default Books;
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
    description :{
        type : "String",
    },
    isCompleted:{
        type : "Boolean",
        default: false
    },
    isBookmarked:{
        type : "Boolean",
        default: false
    },
    isBestSeller:{
        type : "Boolean",
        default: false
    },
    rating:{
        type : "Number"
    }
},{timestamps:true});

const Books = mongoose.model("Book",bookSchema);

export default Books;
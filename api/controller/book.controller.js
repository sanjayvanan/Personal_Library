import Books from '../models/books.model.js'



export const addBooks = async(req,res)=>{
    const {bookName, pageNo, description } = req.body;
    const addBooks = new Books({bookName,pageNo,description});
    try {
        await addBooks.save();
        res.status(200).json(addBooks);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getBooks = async(req, res)=>{
    try {
        const books = await Books.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getBookById = async(req, res)=>{
    const {id} = req.params;
    try {
        const book = await Books.findById(id);
        if(!book) return res.status(500).json({message:"book not found"})
        res.status(200).json(book);

        
    } catch (error) {
        res.status(500).json(error);
    }
}

export const updateBooks = async(req, res)=>{
    const { id } = req.params;
    const { bookName, pageNo, description } = req.body;
    try {
        const updatedBook = await Books.findByIdAndUpdate(
            id,
            { bookName, pageNo, description },
            { new: true }
        );
        if (!updatedBook) return res.status(404).json({ message: 'Book not found' });
        res.status(200).json(updatedBook);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteBooks = async(req, res)=>{
    const { id } = req.params;
    try {
        const deletedBook = await Books.findByIdAndDelete(id);
        if (!deletedBook) return res.status(404).json({ message: 'Book not found' });
        res.status(200).json({ message: 'Book deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
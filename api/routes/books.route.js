import express from 'express';
import {getBooks,getBookById,addBooks,updateBooks,deleteBooks} from '../controller/book.controller.js'


const router = express.Router();

router.get('/getbooks',getBooks);
router.get('/getBookById/:id',getBookById)
router.post('/addbooks',addBooks);
router.put('/updateBooks/:id', updateBooks);
router.delete('/deleteBooks/:id', deleteBooks);


export default router;


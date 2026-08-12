const express=require('express');
const {createStudent,getStudents,getStudent,updateStudent,deleteStudent,uploadFile}=require('../controllers/studentController');
const protect=require('../middleware/authMiddleware');
const uploadImage=require('../middleware/uploadMiddleware');
const router=express.Router();

router.post('/',protect,createStudent);
router.get('/',protect,getStudents);
router.get('/id:',protect,getStudent);
router.put('/id:',protect,updateStudent);
router.delete('/id:',protect,deleteStudent);
router.post('/:id/upload',protect,uploadImage.single('image'),uploadFile);
module.exports=router;
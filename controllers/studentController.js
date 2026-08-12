const Student=require('../models/studentModel');

const createStudent=async(req,res) => {
    try{
        const student=await Student.create({
           name:req.body.name,
           age:req.body.age,
           department:req.body.department,
           createdBy:req.user._id
        });
        res.status(201).json(student);
    }
    catch(error){
        res.status(500).json({
            message:error.message
        });
    }
};

const getStudents=async(req,res)=>{
    try{
        const{search,department,sort,page=1,limit=10}=req.query;
        const filter={};
        if(search){
            filter.name={$regex:search,$options:'i'};

        }
        if(department){
            filter.department=department;
        }
        //creating query
        let query=Student.find(filter).populate("createdBy");
         
        //sorting
        if(sort){
            query=query.sort(sort);
        }

        //pagination
        const skip=(page-1)*limit;
        query=query.skip(skip).limit(Number(limit))

        //executing query
        const students=await query;


        res.status(200).json({
            success:true,
            page:Number(page),
            limit:Number(limit),
            students
        });
    }

    catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        });
    }
};

const getStudent=async(req,res)=>{
    try{
        const student=await Student.findById(req.params.id)
        res.status(200).json(student);
    }
    catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        });
    }
};

const updateStudent=async(req,res)=>{
    try{
        const student=await Student.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(200).json(student);
    }
    catch(error){
        res.status(500).json({
            message:error.message
        });
    }
};

const deleteStudent=async(req,res)=>{
    try{
        const student=await Student.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message:"Student deleted successfully"

        });
    }

    catch(error){
        res.status(500).json({
            message:error.message
        });
    }
};

const uploadFile=async(req,res)=>{
    try{
    
      const student=await Student.findById(req.params.id);
      if(!student){
        return res.status(400).json({
            message:"Student not found"
        });
      }

      student.image=req.file.path;
        await student.save();

        res.status(200).json({
            success:true,
            student
        });
    }



    catch(error){
        res.status(500).json({
            message:error.message
        });
    }
};


module.exports={createStudent,getStudents,getStudent,updateStudent,deleteStudent,uploadFile};

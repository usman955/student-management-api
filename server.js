require("dotenv").config();

const express=require('express');
const connectDB=require('./config/db');
const authRoutes=require('./routes/authRoutes');  
const protect=require('./middleware/authMiddleware'); 
const authorize=require('./middleware/roleMiddleware'); 
const studentRoutes=require('./routes/studentRoutes');

const app=express();
app.use(express.json());
connectDB();

app.use("/api/students",studentRoutes);
app.use('/api/auth',authRoutes);

app.get("/",(req,res) =>{
  res.send("API is running...");
});

app.get("/profile",protect,(req,res) =>{
    res.json({
      message:"This is a protected route",
      user:req.user
    }); 
})

app.get("/admin",protect,authorize("admin"),(req,res) =>{
    res.json({
        message:"Welcome admin"
    });
});

const PORT=process.env.PORT || 5000;

app.listen(PORT,() =>{
    console.log(`Server running on port ${PORT}`);
})


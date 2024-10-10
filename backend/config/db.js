import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://alejandrocc1955:alexander19903@cluster0.bksve1c.mongodb.net/foodapp').then(()=>console.log('DB connected'))
}
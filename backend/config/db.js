import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://<USERNAME>:<YOUR_PASSWORD>@cluster0.dvhplsl.mongodb.net/FoodDeliveryApp').then(()=>console.log("DB connected"));
}
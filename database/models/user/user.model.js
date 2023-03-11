import mongoose from "mongoose";
const userSchema = mongoose.Schema(
  {
    name: String,
    password: String,
    email: String,
  },
  {
    timestamps: true,
  },  {
  role:{
    type: String,
    enum: ['admin', 'user'],
    default: 'user'
  } 
    
}
);
export const userModel=mongoose.model('user',userSchema )
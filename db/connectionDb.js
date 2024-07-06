import mongoose from "mongoose";


export const connectdb= async()=>{
try {
  await  mongoose.connect('mongodb://127.0.0.1:27017/bookApp');
    console.log("connect  to  db" );
} catch (error) {
  console.log("error in connect  to  db",error );


}    


}
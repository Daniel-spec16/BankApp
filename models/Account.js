import mongoose from "mongoose";

const AccountSchema = new mongoose.Schema({
    login: {
        type: String,
        required:true,
        maxlength:60,
    },
    password: {
        type: String,
        required:true,
        maxlength:60,
    },
    fullname: {
        type: String,
        required:true,
        maxlength:60,
    },
    balance: {
        type: Number,
        required:true,
        
    },
    
  
        
    

},
    {timestaps: true}
);

export default mongoose.models.Account || mongoose.model("Account", AccountSchema);
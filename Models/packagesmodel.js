import mongoose from "mongoose";

const packegesScheema = new mongoose.Schema({

    
     packagetitle: {
            type: String,
            unique: true
        },
        packagebody: {
            type: [Object],
        },
    
},
{ timestamps: true })
export default mongoose.model("Package", packegesScheema);
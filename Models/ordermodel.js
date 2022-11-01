import mongoose from "mongoose";


const neworder = new mongoose.Schema({
    userid: {
        type: String,
        required: true
    },
    selectedpackage: {
        type: String,
        required: true
    },
    packagebodytitle: {
        type: String,
        required: true
    },
    needs: {
        type: [String],
    },
    price: {
        type: String,
        required: true
    },

    isalreadyexist: {
        type: Boolean,
        default: false,
    },
    logopath: {
        type: String
    },

    colors: {
        type: [String],
    },
    choice: {
        type: Boolean,
        default: false,
    },
    dataforgraphics: {
        type: [String],
    },
    dataforweb: {
        type: String
    },
    description:{
        type: String
    },
    order_id:{
        type:String
    }
},
{ timestamps: true })

export default mongoose.model('Order', OrderScheema);
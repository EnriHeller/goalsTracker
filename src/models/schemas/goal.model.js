import mongoose from "mongoose"

const goalCollection = 'goals'

const goalSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true,
        unique: true
    },
    description:{
        type: String,
        required: true
    },
    category:{
        type:[String],
        default: ["Personal"]
    }
})

const goalModel = mongoose.model(goalCollection, goalSchema)

export default goalModel
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
    },
    report:{
        type: String,
        enum: ["Daily", "Weekly","Monthly", "Final"],
        default: "Weekly",
        required: true
    },
    deadline: {
        startDate: { type: Date, default: Date.now }, 
        endDate: { type: Date, required:true }
    },
    incentive: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'incentives',
      },
    image:{
        type: String
    },
    evidence:{
        type: String,
        required:true
    },
    status: {
        type: Boolean,
        required: true,
        default: false
    }
})

const goalModel = mongoose.model(goalCollection, goalSchema)

export default goalModel
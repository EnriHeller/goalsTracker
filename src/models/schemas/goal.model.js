import mongoose from "mongoose"

const goalCollection = 'goals'

const goalSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true,
        unique: true
    },
    report:{
        type: String,
        enum: ["Daily", "Weekly","Monthly", "Final"],
        default: "Weekly"
    },
    deadline: {
        startDate: { type: Date, default: Date.now }, 
        endDate: { type: Date, required:true }
    },
    incentive: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'incentives',
    },
    evidence:{
        type: {
            title:{
                type: String,
                enum: ["PDF", "Video", "Photo", "Meeting", "Referent"]
            },
            archives: [String]
        },
        required:true
    }
    /*
    
    that is data who change with user

    status: {
        type: Boolean,
        required: true,
        default: false
    
    } */
})

const goalModel = mongoose.model(goalCollection, goalSchema)

export default goalModel
// models/user.model.js

import mongoose from 'mongoose';

const userCollection = 'users';

const nameSchema = new mongoose.Schema({
    firstName: String,
    surName: String,
    username: String,
});

const userSchema = new mongoose.Schema({
    name: {
        type: nameSchema,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    sex: {
        type: String,
        enum: ['M', 'F', 'X'],
        required: true,
    },
    birthYear: {
        type: Date,
        validate: {
            validator: function (value) {
                const currentDate = new Date();
                const userBirthDate = new Date(value);
                return currentDate.getFullYear() - userBirthDate.getFullYear() >= 18;
            },
            message: 'User must be 18 or older.',
        },
    },
    goals: [{
        goal: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'goals', 
        },
        type: {
            type: String,
            enum: ["me", "other"],
            default: "me",
            required: true,
        },
        report: {
            type: String,
            enum: ["Daily", "Weekly", "Monthly", "Final"],
            default: "Weekly",
            required: true,
        },
        deadline: {
            startDate: { type: Date, default: Date.now },
            endDate: { type: Date, required: true },
        },
        incentive: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'incentives',
        },
        image: {
            type: String,
        },
        evidence: {
            title: {type:String},
            archives: { type: [String] }
        },
        status: {
            type: Boolean,
            required: true,
            default: false
        },
    }],
});

const userModel = mongoose.model(userCollection, userSchema);

export default userModel;

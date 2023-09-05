import mongoose from 'mongoose';

const userCollection = 'users';

const nameSchema = new mongoose.Schema({
  firstName: String,
  surName: String,
  username: String,
});

const goalSchema = new mongoose.Schema({
  goalId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'goals',
  },
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
  goals: [goalSchema]
});

const userModel = mongoose.model(userCollection, userSchema);

export default userModel;

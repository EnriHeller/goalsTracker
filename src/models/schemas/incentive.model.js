import mongoose from 'mongoose';

const incentiveCollection = 'incentives'

const incentiveSchema = new mongoose.Schema({
  isMonetary: {
    type: Boolean,
    required: true,
  },
  details: {
    monetary: {
      amount: {
        type: Number,
        min: 0,
      },
      paymentMethod: {
        type: String,
        enum: ['Credit Card', 'PayPal', 'Cash', 'Bank Transfer', 'BTS'],
      },
      useOfFunds: {
        type: String,
        enum: ['Investment', 'Charity', 'Savings', 'Other'],
      },
    },
    nonMonetary: String,
  },
});

const incentiveModel = mongoose.model(incentiveCollection, incentiveSchema);

export default incentiveModel;

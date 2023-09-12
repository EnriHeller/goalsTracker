import mongoose from 'mongoose';

const incentiveCollection = 'incentives'

const incentiveSchema = new mongoose.Schema({
  amount: {
    type: Number,
    min: 0,
  },
  paymentMethod: {
    type: String,
    enum: ['BTC', "MP", "USDT"],
  }
});

const incentiveModel = mongoose.model(incentiveCollection, incentiveSchema);

export default incentiveModel;

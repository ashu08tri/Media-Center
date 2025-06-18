const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  type: {
    type: String,
    enum: ['digital', 'print', 'both'],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  subscribedAt: { type: Date, default: Date.now },
  status: {
    type: String,
    enum: ['unpaid', 'paid'],
    default: 'unpaid',
  },
});

module.exports = mongoose.model("Subscription", subscriptionSchema);

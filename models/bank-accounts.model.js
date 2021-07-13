const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const refSchema = new Schema({
    accountNumber: String, 
    type: String,
    amount: Number,
    interest: Number,
    payments: Number,
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

module.exports = refSchema;
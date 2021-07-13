// Imports
const mongoose = require('mongoose');
const accountSchema = require('../models/bank-accounts.model');

// Schema
const Account = mongoose.model('Account', accountSchema);

// Select all transactions for account
const selectTransactions = async (accountNumber) => {
    try {
        return await Account.find({ accountNumber });
    } catch (err) {
        console.log(err);
    }
}

// Insert transaction
const insertTransactions = async (data) => {
    const a = new Account(data);
    return await a.save();
}

module.exports = { selectTransactions, insertTransactions }
// Aggregate module that provide interface for scalable application
const { selectTransactions, insertTransactions } = require('./bank-services');

module.exports = {
    selectTransactions,
    insertTransactions
}
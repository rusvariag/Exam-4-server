// Aggregate module that provide interface for scalable application
const { accountSelectValidation, transactionInsertValidation } = require('./bank-validations');

module.exports = {
    accountSelectValidation,
    transactionInsertValidation
}
// Check the follow vacation_id parameter
const accountSelectValidation = (req, res, next) => {
    if (false) {
        return res.sendStatus(401);
    }
    return next();
}

// Check the follow vacation_id parameter
const transactionInsertValidation = (req, res, next) => {
    if (false) {
        return res.sendStatus(401);
    }
    return next();
}

module.exports = {
    accountSelectValidation,
    transactionInsertValidation
}
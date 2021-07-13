// Get packages
const express = require('express');
const router = express.Router();
// Get services
const { selectTransactions, insertTransactions } = require('../services');
// Get validations
const { accountSelectValidation, transactionInsertValidation } = require('../validations');

router.get('/account/:id', accountSelectValidation, async (req, res) => {
    try {
        const result = await selectTransactions(req.params.id.toString());
        res.json(result);
    } catch (err) {
        return res.sendStatus(400);
    }
});

router.post('/transaction', transactionInsertValidation, async (req, res) => {
    const { accountNumber, type, interest, payments, amount } = req.body;
    try {
        await insertTransactions({ accountNumber, type, interest, payments, amount });
        res.json({ status: 'OK' });
    } catch (err) {
        return res.sendStatus(400);
    }
});

module.exports = router;
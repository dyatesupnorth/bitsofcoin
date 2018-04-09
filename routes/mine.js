const express = require('express')
const router = express.Router()
const { check } = require('express-validator/check')

const BitsOfCoin = require('../middleware/bitsofcoin')

const responseMiddleware = (req, res, next) => {
  return res.json(req.responseValue)
}
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Bit :sof: Coin' })
})

router.post('/transactions/new', [
  check('sender', 'Sender must be a String').exists(),
  check('recipient', 'Sender must be a String').exists(),
  check('amount', 'Sender must be a Int Value').isInt().exists()
], BitsOfCoin.newTransaction, responseMiddleware)

router.get('/mine', BitsOfCoin.mine, responseMiddleware)

router.get('/chain', BitsOfCoin.getChain, responseMiddleware)

module.exports = router
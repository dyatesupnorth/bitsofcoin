const Blockchain = require('./blockchain')
const { validationResult } = require('express-validator/check')

class BitsOfCoin{
	constructor(){
		this.blockchain = new Blockchain()
		this.getChain = this.getChain.bind(this)
		this.mine = this.mine.bind(this)
		this.newTransaction = this.newTransaction.bind(this)
	}
	getChain(req, res, next){
		req.responseValue = {
			message: 'Get Chain',
			chain: this.blockchain.chain
		}
    	return next()
	}
	mine(req, res, next){}
	newTransaction(req, res, next){}
}

module.exports = new BitsOfCoin()

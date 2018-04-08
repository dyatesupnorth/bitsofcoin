const Blockchain = require('./blockchain')
const { validationResult } = require('express-validator/check')

class BitsOfCoin{
	constructor(){
		this.blockchain = new Blockchain()
		this.getChain = this.getChain.bind(this)
		this.mine = this.mine.bind(this)
		this.newTransaction = this.newTransaction.bind(this)
	}
	getChain(){}
	mine(){}
	newTransaction(){}
}

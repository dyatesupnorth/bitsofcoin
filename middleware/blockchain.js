class Blockchain {
  constructor () {
    this.chain = []
    this.current_transactions = []

    this.newBlock = this.newBlock.bind(this)
    this.newTransaction = this.newTransaction.bind(this)
    this.lastBlock = this.lastBlock.bind(this)
    this.proofOfWork = this.proofOfWork.bind(this)
  }

  newBlock () { }

  newTransaction () {}

  hash (block) { }

  lastBlock () {}
}

module.exports = Blockchain
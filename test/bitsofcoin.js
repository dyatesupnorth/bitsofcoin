const assert = require('assert')
const BitsOfCoin = require('../middleware/bitsofcoin')

//Begin bitsofcoin test suite.
describe('bitsofcoin API', () => {
  // 1. Get full chain
  describe('/getChain', () => {
    it('Should return a chain with only the genesis block', () => {
      const req = {}
      BitsOfCoin.getChain(req, {}, () => {
        const chain = req.responseValue.chain
        assert.equal(chain.length, 1)
      })

    })
  })
  // 2. Mine a new block.
  describe('/mine', () => {
    it('Should mine a new block to add into the chain', () => {

    })
  })

  // 3. Add new transaction to the blockchain.
  describe('/transaction/new', () => {
    it('Should add the new transaction to the next mining', () => {

    })
  })
})
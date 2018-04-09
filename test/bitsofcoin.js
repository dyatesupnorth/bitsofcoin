const assert = require('assert')
const BitsOfCoin = require('../middleware/bitsofcoin')

// Get enviroment in the .env
require('dotenv').config()

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
      const req = {}
      BitsOfCoin.mine(req, {}, () => {
        BitsOfCoin.getChain(req, {}, () => {
          const chain = req.responseValue.chain
          assert.equal(chain.length, 2)
        })
      })
    })
  })

  // 3. Add new transaction to the blockchain.
  describe('/transaction/new', () => {
    it('Should add the new transaction to the next mining', () => {
      const req = {
        body: {
          sender: 'sender1',
          recipient: 'sender2',
          amount: 1
        }
      }
      BitsOfCoin.newTransaction(req, {}, () =>{
        BitsOfCoin.mine(req, {}, () => {
          BitsOfCoin.getChain(req, {}, () => {
            const chain = req.responseValue.chain
            const transactions = chain.slice(-1)[0].transactions
            assert.equal(transactions[0].sender, 'sender1')
          })
        })
      })
    })
  })
})
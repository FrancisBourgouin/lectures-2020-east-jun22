const chai = require('chai')
const calculateCartValues = require('../shoppingCart')
chai.should()
const expect = chai.expect


const robot = { name: 'Robot', icon: '🤖', price: 4.99 }
const pizza = { name: 'Pizza (Hawaiian)', icon: '🍕', price: 49.99 }
const dragon = { name: 'Bawb', icon: '🐉', price: 1.99 }
const TAX_ONT = 0.13
const TAX_QC = 0.14975

// const expectedValuesTemplate = {
//   subtotal: 999,
//   total: 999,
//   tax: 999,
//   itemList: "",
//   amountOfItems: 5
// }

// About subtotal being calculated properly

it("should calculate the subtotal properly", () => {
  const currentCart = [robot, dragon, dragon]
  const expectedOutput = 8.97
  const cartOutput = calculateCartValues(currentCart)

  cartOutput.subtotal.should.equal(expectedOutput)
})
// About tax being calculated properly
it("should calculate the tax amount properly", () => {
  const currentCart = [robot, dragon, dragon]
  const expectedOutput = 1.17
  const cartOutput = calculateCartValues(currentCart)

  cartOutput.tax.should.equal(expectedOutput)
})
// About total being calculated properly
it("should calculate the total properly", () => {
  const currentCart = [robot, dragon, dragon]
  const expectedOutput = 10.14
  const cartOutput = calculateCartValues(currentCart)

  cartOutput.total.should.equal(expectedOutput)
})
// Itemlist should be generated properly
it("should show the icons of each item in our cart", () => {
  const currentCart = [robot, dragon, dragon]
  const expectedOutput = "Your cart contains: 🤖, 🐉, 🐉"
  const itemList = calculateCartValues(currentCart).itemList

  itemList.should.be.a('string')
  itemList.should.equal(expectedOutput)
})
// AmountOfItems should be counted properly
it("should calculate the amount of items properly", () => {
  const currentCart = [robot, dragon, dragon]
  const expectedOutput = 3
  // const amountOfItems = calculateCartValues(currentCart).amountOfItems
  const { amountOfItems } = calculateCartValues(currentCart)

  amountOfItems.should.be.a('number')
  amountOfItems.should.equal(expectedOutput)
})
// is the output object properly formed?
it("should be an object if the input data is valid", () => {
  const currentCart = [pizza]
  const calculatedCart = calculateCartValues(currentCart)

  calculatedCart.should.be.an('object')
})
// is the cart array properly built
it("should return null if the cart array is invalid", () => {
  const currentCart = "trolololo"

  const calculatedCart = calculateCartValues(currentCart)
  expect(calculatedCart).to.be.null
  // calculatedCart.should.equal('null')
  // calculatedCart.should.be.a('null')
})
// is the item objects properly built
it("should return null if the items in the cart are invalid", () => {
  const currentCart = ["Never", "Gonna", "Give"]

  const calculatedCart = calculateCartValues(currentCart)

  // calculatedCart.should.be.a('null')
  expect(calculatedCart).to.be.null
})

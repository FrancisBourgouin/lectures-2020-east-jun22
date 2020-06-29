// Items, price, quantity
// groceries, size, tax, subtotal, shipping, shipping cost
// coupon codes, timerOnCart, description


// Buoy ?

// Function that will prepare values to show in the cart

// Input will look like this :
const robot = { name: 'Robot', icon: '🤖', price: 4.99 }
const pizza = { name: 'Pizza (Hawaiian)', icon: '🍕', price: 49.99 }
const dragon = { name: 'Bawb', icon: '🐉', price: 1.99 }
const TAX_ONT = 0.13
const TAX_QC = 0.14975
// const currentCart = [robot, dragon, dragon]

const validateCart = cart => {
  // loop !
  if (Array.isArray(cart)) {
    for (const item of cart) {
      if (item && typeof item === 'object' && !Array.isArray(item)) {
        const { name, icon, price } = item
        // const name = item.name
        // const icon = item.icon
        // const price = item.price
        if (typeof name !== 'string' || typeof icon !== 'string' || typeof price !== 'number') {
          return false
        }
      } else {
        return false
      }
    }
  } else {
    return false
  }

  return true
}






const calculateCartValues = (currentCart) => {
  // if (!Array.isArray(currentCart)) {
  //   return null
  // }
  if (!validateCart(currentCart)) {
    return null
  }

  let subtotalBuffer = 0
  let itemListBuffer = "Your cart contains: "
  // for (const currentCartItem of currentCart) {
  //   subtotalBuffer += currentCartItem.price
  //   itemListBuffer += `${currentCartItem.icon}, `
  // }
  currentCart.forEach((currentCartItem, currentIndex) => {
    subtotalBuffer += currentCartItem.price
    if (currentIndex === (currentCart.length - 1)) {
      itemListBuffer += `${currentCartItem.icon}`
    } else {
      itemListBuffer += `${currentCartItem.icon}, `
    }
  })
  const tax = Math.round(subtotalBuffer * TAX_ONT * 100) / 100
  const total = subtotalBuffer + tax

  return { subtotal: subtotalBuffer, tax, total, itemList: itemListBuffer, amountOfItems: currentCart.length }
}


console.log(calculateCartValues([robot, pizza, pizza, dragon]))



module.exports = calculateCartValues
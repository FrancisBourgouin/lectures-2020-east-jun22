const higherOrderFunctionCallbackStyle = (array, action) => {
  for (const element of array) {
    action(element)
  }
}

higherOrderFunctionCallbackStyle([1, 2, 3], ele => console.log(ele))



const countdown = time => {
  for (let i = time; i >= 0; i--) {
    console.log(`${i}...`)
  }
}

// countdown(10)
const countdownFromFive = () => countdown(5)

// countdownFromFive()


const countdownFactory = time => {
  const outputFunction = () => {
    for (let i = time; i >= 0; i--) {
      console.log(`${i}...`)
    }
  }

  return outputFunction
}

const countdownFrom20 = countdownFactory(20)

// () => {
//   for (let i = 20; i >= 0; i--) {
//     console.log(`${i}...`)
//   }
// }

countdownFrom20()
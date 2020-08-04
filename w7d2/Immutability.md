Immutability -> mutability * -1

Is mutability wrong ? Not always

[1,2,3] => [1,2] (mutated the array)

const bob = [1,2,3,4]

for(let i = 0; i < bob.length; i++){
  bob.pop()
}

bob => []

function betterMagnitude(sourceArray){
  const array = sourceArray
  for(let i = 0; i < sourceArray.length; i++){
    array.pop()
  }
}
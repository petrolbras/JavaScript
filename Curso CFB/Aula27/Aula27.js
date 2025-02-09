function* cores(){
    yield 'Red'
    yield 'Green'
    yield 'Blue'
}

const itc = cores()
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
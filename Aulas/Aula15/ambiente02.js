let num = [5, 2, 4, 8, 9]

num.push(10)
num.sort()
console.log(num)
console.log(`Nosso vetor tem ${num.length} posições!`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(4)
if (pos == -1) {
    console.log(`Seu valor não foi encontrado`)
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}

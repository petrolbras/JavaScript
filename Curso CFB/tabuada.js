console.log("Começo da contagem")

function tabuada(num) {
    let multi = 1
    for (let i = 0; i<10; i++){
        console.log(`${num} x ${multi} = ${num*multi}`)
        multi += 1
    }
}

tabuada(5)

console.log("Fim da contagem")


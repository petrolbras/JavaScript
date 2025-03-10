function* parimpa() {
    let i = [2,4,3]
    while (true){
        yield i++
        if(i>5)
            break
    }
}

const itc = parimpa()

for( c of itc){
    console.log(c)
}
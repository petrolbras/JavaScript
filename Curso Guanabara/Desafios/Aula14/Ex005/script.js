function contar() {
    let ini = document.getElementById('iniciotxt')
    let fim = document.getElementById('fimtxt')
    let passo = document.getElementById('passotxt')
    let res = document.getElementById('res')
    
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        window.alert('[ERRO] Não é possível realizar essa conta!')
    }  else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo Inválido! Considerando passo = 1')
            p = 1
        }
       if (i < f) {
        // contagem crescente
        for(let c = i; c <= f; c += p) {
            res.innerHTML += ` ${c} \u{1F449}`
        }
    } else {
        // contagem decrescente
        for(let c= i; c >= f; c -=p) {
            res.innerHTML += `${c} \u{1F449}`
        }
    }
    res.innerHTML += `\u{1f3c1}`
    }
}

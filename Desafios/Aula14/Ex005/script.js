function contar() {
    let ini = document.getElementById('iniciotxt')
    let fim = document.getElementById('fimtxt')
    let passo = document.getElementById('passotxt')
    let res = document.getElementById('res')
    
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = ('[ERRO] Não é possível realizar essa conta!')
    }  else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        for(let c = i; c <= f; c += p) {
            res.innerHTML += `${c} `
        }
    }

}

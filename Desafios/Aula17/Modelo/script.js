let num = document.getElementById('numtxt')
let lista = document.getElementById('selectxt')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <=100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}


function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {

    } else {
        window.alert('Valor inválido ou já foi encontrado na lista!')
    }
} 

function Finalizar() {
    let fin = document.getElementById ('numtxt')

    if (fin.value.length == 0) {
        alert('Adicione valores antes de finalizar!')
    }
}


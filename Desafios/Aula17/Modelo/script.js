function adicionar() {
    let num = document.getElementById('numtxt')
    let res = document.getElementById('selectxt')

    if (num.value.length == 0) {
        alert('Não é possível fazer a conta!')
    } else if (num.value < 1 || num.value > 100) {
        alert('Esses valores são pequenos/grandes demais!')
    }
} 

function Finalizar() {
    let fin = document.getElementById ('numtxt')

    if (fin.value.length == 0) {
        alert('Adicione valores antes de finalizar!')
    }
}


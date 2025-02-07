function contar() {
    let num = document.getElementById('numtxt')
    let tab = document.getElementById('tabutxt')
    if (num.value.length == 0) {
        alert('Insira um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}
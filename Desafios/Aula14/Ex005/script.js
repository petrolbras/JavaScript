function contar() {
var ini = document.getElementById('iniciotxt')
var fim = document.getElementById('fimtxt')
// var pas = document.getElementById('passotxt')
var n1 = Number(ini.value)
var n2 = Number(fim.value)
var s = n1 + n2
res.innerHTML = `A sua conta tem valor ${s}`
}


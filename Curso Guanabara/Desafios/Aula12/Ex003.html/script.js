function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // Bom Dia!
        img.src = 'imagens/fotomanha.png'
        document.body.style.background = '#C79450'
    } else if (hora >= 12 && hora <= 18) {
        // Boa Tarde!
        img.src = 'imagens/fototarde.png'
        document.body.style.background = '#E9D7CB'
    } else {
        // Boa Noite!
        img.src = 'imagens/fotonoite.png'
        document.body.style.background = '#061113'
    }
}

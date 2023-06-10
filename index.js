const btn1 = document.querySelector("#btntrocar")
btn1.addEventListener('click', btntrocar)

let img = 1
let imagensarray = ['imagens/rick-e-morty.certa.jpg','imagens/abrindo-olho.certo.jpg', 'imagens/alienigenas-dandodedo.certo.jpg',
'imagens/flutuando.certo.webp',
'imagens/portal.certo.webp'];

function btntrocar() {
    if (img == imagensarray.length) {
        img = 0
    }
    document.getElementById('img').src = imagensarray[img];
    img++
}

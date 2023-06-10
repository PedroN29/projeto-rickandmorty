const btn1 = document.querySelector("#btntrocar")
btn1.addEventListener('click', btntrocar)

let img = 1
let imagensarray = ['imagens/rick-e-morty.jpg','imagens/abrindo-olho.jpg', 'imagens/alienigenas-dandodedo.jpg',
'imagens/flutuando.webp',
'imagens/portal.webp'];

function btntrocar() {
    if (img == imagensarray.length) {
        img = 0
    }
    document.getElementById('img').src = imagensarray[img];
    img++
}

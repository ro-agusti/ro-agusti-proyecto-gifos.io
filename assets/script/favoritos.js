//console.log(localStorage.getItem(''));
let storageFavoritos = localStorage.getItem('favoritos');
let favoritos;
if (storageFavoritos) {
    favoritos = JSON.parse(storageFavoritos);
}else{
    favoritos=[];
}
const gifsConteiner = document.getElementById('gifsConteiner');
console.log(favoritos); 


const getGifoForEach = (array) => {
    if (array.length > 0) {
        array.forEach((el) => {
            console.log(el.gifo);
            let gifoCont = document.createElement('div');
            gifoCont.classList = 'gifoCon';
            gifsConteiner.appendChild(gifoCont);
            let imgFavoritos = document.createElement('img');
            imgFavoritos.src = el.gifo;
            gifoCont.appendChild(imgFavoritos);
            imgFavoritos.addEventListener('mouseenter', () => {
                bgGifo = document.createElement('div');
                bgGifo.classList.add('bgGifo');
                gifoCont.appendChild(bgGifo);
                let acciones = document.createElement('div');
                acciones.classList = 'acciones';
                bgGifo.appendChild(acciones);
                let corazon = document.createElement('div');
                corazon.classList = 'corazon';
                //corazon.getAttribute('id');
                //corazon.setAttribute('id', info.data[i].id);//-----------------
                acciones.appendChild(corazon);
                //console.log(corazon);
                let descargar = document.createElement('div');
                descargar.classList = 'descargar';
                acciones.appendChild(descargar);
                let ampliar = document.createElement('div');
                ampliar.classList = 'ampliar';
                acciones.appendChild(ampliar);
                //getMouseEnter(img);
                /* corazon.addEventListener('click',() =>{
                    // sacar de favoritos
                    }) */
            })
            gifoCont.addEventListener('mouseleave', () => {
                bgGifo.classList.remove('bgGifo');

            })
        });
    } else {
            console.log('array vacio')
    }

};

getGifoForEach(favoritos);
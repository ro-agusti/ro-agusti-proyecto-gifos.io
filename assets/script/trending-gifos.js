//---- trending gifos----
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
const carrousselConteiner = document.getElementById('carrousselConteiner');

let numGifo = 3;
seeTrendingGifos(numGifo);
rightArrow.addEventListener('click',()=>{
    numGifo+=3;

    seeTrendingGifos(numGifo);
})
async function seeTrendingGifos(cantGifo){
    const apiKey = 'SNJ9a5GbDjgSmOddC8ab03rQXLhxjPvS';
    const url = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=${cantGifo}`;
    console.log(url);
    try{
        const response=await fetch(url);
        const info = await response.json();

        for( let i = 0; i< cantGifo;i++){
            let gifoCont = document.createElement('div');
            gifoCont.classList = 'img-carroussel';
            carrousselConteiner.appendChild(gifoCont);
            let img = document.createElement('img');
            img.src = info.data[i].images.original.url;
            gifoCont.appendChild(img);

            img.addEventListener('mouseenter',()=>{
                bgGifo = document.createElement('div');
                bgGifo.classList.add('bg-img-carroussel');
                gifoCont.appendChild(bgGifo);
                let acciones = document.createElement('div');
                acciones.classList = 'acciones';
                bgGifo.appendChild(acciones);
                let corazon = document.createElement('div');
                corazon.classList = 'corazon';
                corazon.getAttribute('id');
                corazon.setAttribute('id', info.data[i].id);
                acciones.appendChild(corazon);
                let aDescargar = document.createElement('a');
                aDescargar.href = '#';
                acciones.appendChild(aDescargar);
                let descargar = document.createElement('div');
                descargar.classList = 'descargar';
                aDescargar.appendChild(descargar);
                let ampliar = document.createElement('div');
                ampliar.classList = 'ampliar';
                acciones.appendChild(ampliar);
            });
            gifoCont.addEventListener('mouseleave', () => {
                bgGifo.classList.remove('bg-img-carroussel');
            })
        }

    } catch (err){
        console.log(err);
    }
}

 //seeMouseEnter()
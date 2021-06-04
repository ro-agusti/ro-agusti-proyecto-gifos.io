//----menu-----
const burger = document.getElementById('burger');
const menu = document.getElementById('menu-ul');

burger.addEventListener('click', () => {
    menu.classList.toggle('menu-ul_visible');
    burger.classList.toggle('burger-close');
    //burger.classList.remove('burger');
});

/* //--- cambiar a modo nocturno
const theme = document.getElementById('theme');
const btnNightMode = document.getElementById('nightMode');
btnNightMode.addEventListener('click', () =>{
    if(theme.getAttribute('href')== './assets/style/style.css'){
        theme.href = './assets/night-style/night-style.css';
    }else{
        theme.href = './assets/style/style.css';
    }
}); */

// ---- searching ----

const search = document.getElementById('buscaGifos');
window.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {


        // console.log(search.value);
        let busqueda = search.value;
        newSearch(busqueda);

    }
});
const favoritos = [];
async function newSearch(gifo) {

    const apiKey = 'SNJ9a5GbDjgSmOddC8ab03rQXLhxjPvS';
    let cantidad = '12';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${gifo}&limit=${cantidad}`;

    try {
        const response = await fetch(url);
        const info = await response.json();
        const searching = document.getElementById('searching');
        const lineDiv = document.createElement('div');
        lineDiv.classList.add('line-div');
        searching.appendChild(lineDiv);
        //console.log(lineDiv);
        const typeOfGifo = document.createElement('h2');
        typeOfGifo.classList.add('type-of-gifo');
        typeOfGifo.textContent = gifo.toUpperCase();
        searching.appendChild(typeOfGifo);
        const conteiner = document.createElement('div');
        conteiner.classList.add('conteiner');
        searching.appendChild(conteiner);

        for (let i = 0; i < cantidad; i++) {
            let gifoCont = document.createElement('div');
            gifoCont.classList = 'gifoCon';
            conteiner.appendChild(gifoCont);
            let img = document.createElement('img');
            img.src = info.data[i].images.original.url;
            //img.id = `gifoID${info.data[i].id}`;
            //console.log(img);
            gifoCont.appendChild(img);
            let bgGifo ;
            
            img.addEventListener('mouseenter', () => {
                bgGifo = document.createElement('div');
                bgGifo.classList.add('bgGifo');
                gifoCont.appendChild(bgGifo);
                let acciones = document.createElement('div');
                acciones.classList = 'acciones';
                bgGifo.appendChild(acciones);
                let corazon = document.createElement('div');
                corazon.classList = 'corazon';
                corazon.getAttribute('id');
                corazon.setAttribute('id', info.data[i].id);
                acciones.appendChild(corazon);
                //console.log(corazon);
                let descargar = document.createElement('div');
                descargar.classList = 'descargar';
                acciones.appendChild(descargar);
                let ampliar = document.createElement('div');
                ampliar.classList = 'ampliar';
                acciones.appendChild(ampliar);
                //getMouseEnter(img);
                corazon.addEventListener('click',() =>{
                    console.log(corazon.id);
                    let newFavorito = {
                        id: corazon.id
                    }
                    //const favorito = favoritos.find(x => x.id === newProduct.id);
                    favoritos.push(newFavorito);
                    localStorage.setItem('favoritos', JSON.stringify(favoritos));
                })
            })
            gifoCont.addEventListener('mouseleave', ()=>{
               bgGifo.classList.remove('bgGifo');
               
            })
            

        }
        const btnVerMas = document.createElement('button');
        btnVerMas.classList.add('btnVerMas');
        btnVerMas.textContent = 'VER MAS';
        searching.appendChild(btnVerMas);
        btnVerMas.addEventListener('click', () => {
            //verMas(img,conteiner)
            for (let i = 24; i < Number(cantidad * 2); i++) {
                let img = document.createElement('img');
                img.src = info.data[i].images.original.url;
                img.id = `gifoID${info.data[i].id}`;
                //console.log(img);
                conteiner.appendChild(img);
                getMouseEnter(img)
            }
        })
    } catch (err) {
        console.log(err);
    }
}
/* function verMas(el, cont) {
    el = document.createElement('img');
    el.src = info.data[i].images.original.url;
    el.id = `gifoID${info.data[i].id}`;
    //console.log(img);
    cont.appendChild(el);
} */
function getMouseEnter(el,) {
    el.addEventListener('mouseenter', () => {
        //console.log('hola');


    })
}


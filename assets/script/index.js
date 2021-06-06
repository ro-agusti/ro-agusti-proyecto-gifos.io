
//--- cambiar a modo nocturno
/* const theme = document.getElementById('theme');
const btnNightMode = document.getElementById('nightMode');
btnNightMode.addEventListener('click', () =>{
    if(theme.getAttribute('href')== './assets/style/style.css'){
        theme.href = './assets/night-style/night-style.css';
    }else{
        theme.href = './assets/style/style.css';
    }
});  */

// ---- searching ----

const search = document.getElementById('buscaGifos');
window.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {


        // console.log(search.value);
        let busqueda = search.value;
        newSearch(busqueda);

    }
});
//const favoritos = [];
let cantidad = 12;

const btnVerMas = document.getElementById('btnVerMas');
btnVerMas.addEventListener('click', () => {
    cantidad += 12;
    console.log(cantidad);
    newSearch(search.value);
    
})
if (cantidad >= 30) {
        btnVerMas.classList.add('hidden');
    }
async function newSearch(gifo) {

    const apiKey = 'SNJ9a5GbDjgSmOddC8ab03rQXLhxjPvS';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${gifo}&limit=${cantidad}`;

    try {
        const response = await fetch(url);
        const info = await response.json();
        const searching = document.getElementById('searching');

        while (searching.lastChild) {
            searching.lastChild.remove()
        }

        btnVerMas.classList.remove('hidden');
        //btnVerMas.classList.add('btnVerMas');


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
            let bgGifo;

            let idGifo = info.data[i].id;
            let titleGifo = info.data[i].title;
            let userGifo = info.data[i].username;
            let urlGifo = img.src;

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
                corazon.setAttribute('id', info.data[i].id);//-----------------
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
                corazon.addEventListener('click', () => {
                   // e.preventDefault();
                    let newFavorito = {
                        id: idGifo,
                        username: userGifo,
                        title: titleGifo,
                        gifo: urlGifo
                    }
                    getFavoritosLS(newFavorito);
                })
                descargar.addEventListener('click', () => {
                    console.log(aDescargar);
                    /* fetch(img)
                        .then(res=>res.blob())
                        .then(img=>{
                            aDescargar.href=URL.createObjectURL(img);
                        }) */
                })
            })
            gifoCont.addEventListener('mouseleave', () => {
                bgGifo.classList.remove('bgGifo');
            })
        }
    } catch (err) {
        console.log(err);
    }

}


//-----funcion cargar local storage ------
const getFavoritosLS = (objeto) => {
    let localStorage = localStorage.getItem('favoritos');
    if (localStorage) {
        let parsearLS = JSON.parse(localStorage);
        let filtrarLS = parsearLS.filter(el => objeto.id == el.id);
        console.log(filtrarLS);
        if (filtrarLS.length > 0) {
            console.log('ya lo tenias en favoritos');
        } else {
            console.log('agregado a favoritos');
            parsearLS.push(objeto);
            let arrayLS = JSON.stringify(parsearLS);
            localStorage.setItem('favoritos', arrayLS);
        }
    } else {
        console.log('agregado a favoritos');
        let lsProvisorio = JSON.stringify(objeto);
        localStorage.setItem('favoritos', lsProvisorio);
    }
};


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
const trending = document.getElementById('trending');
window.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {


        // console.log(search.value);
        let busqueda = search.value;
        newSearch(busqueda);
 //trending.classList.add('hidden');
    }
});
const favoritos = [];
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
        trending.classList.add('hidden');
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
                let objetoGifo = {
                    id: idGifo,
                    username: userGifo,
                    title: titleGifo,
                    gifo: urlGifo
                }
                corazon.addEventListener('click', () => {
                    getFavoritos(objetoGifo);
                })
                descargar.addEventListener('click', () => {
                    console.log(aDescargar);
                    /* fetch(img)
                        .then(res=>res.blob())
                        .then(img=>{
                            aDescargar.href=URL.createObjectURL(img);
                        }) */
                })
                ampliar.addEventListener('click', () => {
                    ampliarGifo(objetoGifo);
                })
            })
            gifoCont.addEventListener('mouseleave', () => {
                bgGifo.classList.remove('bgGifo');
            })
        }
    } catch (err) {
        console.log(err);
        const sinResultados = document.getElementById('sinResultados');
        sinResultados.classList.remove('hidden');
        btnVerMas.classList.add('hidden');
    }

}

//-----funcion cargar local storage ------
function getFavoritos(newGifo){
    let itemFavorito = favoritos.find(el => el.id == newGifo.id);
    if(itemFavorito){
        console.log('ya es un favorito');
    }else{
        favoritos.push(newGifo);
        console.log('se agrego al carrito');
        console.log(favoritos);
        localStorage.setItem('favoritos',JSON.stringify(favoritos));
    }
}

//----- ampliar gifo -----
const ampliarGifoSection = document.getElementById('ampliarGifoSection');
function ampliarGifo(el) {
    let divContGn = document.createElement('div');
    divContGn.classList.add('ampliar_gifo');
    ampliarGifoSection.appendChild(divContGn);
    let divClosed = document.createElement('div');
    divClosed.classList.add('close');
    divContGn.appendChild(divClosed);
    let divImgCont = document.createElement('div');
    divImgCont.classList.add('img-cont');
    divContGn.appendChild(divImgCont);
    let divLeftArrow = document.createElement('div');
    divLeftArrow.classList.add('left-arrow');
    divImgCont.appendChild(divLeftArrow);
    let imgGifo = document.createElement('img');
    imgGifo.classList.add('img-gifo');
    imgGifo.src = el.gifo;
    divImgCont.appendChild(imgGifo);
    let divRightArrow = document.createElement('div');
    divRightArrow.classList.add('right-arrow');
    divImgCont.appendChild(divRightArrow);
    let divContAcciones = document.createElement('div');
    divContAcciones.classList.add('cont-aciones');
    divContGn.appendChild(divContAcciones);
    let text = document.createElement('div');
    text.classList.add('text');
    divContAcciones.appendChild(text);
    let user = document.createElement('h6');
    user.classList.add('user');
    user.textContent = el.username;
    text.appendChild(user);
    let titleGifo = document.createElement('h5');
    titleGifo.classList.add('titleGifo');
    titleGifo.textContent = el.title;
    text.appendChild(titleGifo);
    let corazon = document.createElement('div');
    corazon.classList.add('corazon-violeta');
    divContAcciones.appendChild(corazon);
    let descargar = document.createElement('div');
    descargar.classList.add('descargar');
    divContAcciones.appendChild(descargar);
    divClosed.addEventListener('click',()=>{
        ampliarGifoSection.classList.add('hidden');
    })
    corazon.addEventListener('click',()=>{
        getFavoritos(el);
    })
}
export {ampliarGifo,getFavoritos} ;


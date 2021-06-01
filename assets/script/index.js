//----menu-----
const burger = document.getElementById('burger');
const menu = document.getElementById('menu-ul');

burger.addEventListener('click', ()=> {
    menu.classList.toggle('menu-ul_visible');
    burger.classList.toggle('burger', 'burger-close');
    //burger.classList.remove('burger');
});

// ---- searching ----

const buscaGifos = document.getElementById('buscaGifos');
buscaGifos.addEventListener('click',()=>{
    
})

/* const buscaGifos = document.getElementById('buscaGifos');
const clave = 'SNJ9a5GbDjgSmOddC8ab03rQXLhxjPvS';
let busqueda = buscaGifos.value ; 
let cantidad = '12'; // se puede modificar hasta 25 que es lo que permite la API de gifos
const consultarAPI = `https://api.giphy.com/v1/gifs/search?api_key=${clave}&q=${busqueda}&limit=${cantidad}`;  */



//---favoritos
/* const favorite= document.getElementById('favorite');

favorite.addEventListener('click', () =>{

}) */
//--- cambiar a modo nocturno
const theme = document.getElementById('theme');
const btnNightMode = document.getElementById('nightMode');
btnNightMode.addEventListener('click', () =>{
    if(theme.getAttribute('href')== './assets/style/style-crea-gifos.css'){
        theme.href = './assets/night-style/night-style.css';
    }else{
        theme.href = './assets/style/style-crea-gifos.css';
    }
});

// ---- crear gifos -----
const createGifo = document.getElementById('createGifo');
const cuadrado = document.getElementById('cuadrado');
const title = document.getElementById('title');
const paragraph = document.getElementById('paragraph');
const btnComenzarGifo = document.getElementById('btnComenzarGifo');
btnComenzarGifo.textContent = 'COMENZAR';
title.innerHTML='Aqui podras <br>crear tus propios <span>GIFOS</span>';
paragraph.innerHTML='¡Crea tu GIFO en solo 3 pasos!<br>(solo necesitas una camara para grabar un video)';

// ---- btn pasos para crear gifos ---

const paso1 = document.getElementById('paso1');
const paso2 = document.getElementById('paso2');
const paso3 = document.getElementById('paso3');
console.log(paso1);
const paso1H5 = document.getElementById('paso1H5');
const paso2H5 = document.getElementById('paso2H5');
const paso3H5 = document.getElementById('paso3H5');


/* createGifo.addEventListener('click',()=> {
    const h1CreateGifo = document.createElement('h1');
    h1CreateGifo.classList.add('title');
    h1CreateGifo.innerHTML='¿Nos das acceso<br> a tu camara?';
    cuadrado.appendChild(h1CreateGifo);
    const pCreateGifo = document.createElement('p');
    pCreateGifo.innerHTML='El acceso a tu camara sera valido solo<br> por el tiempo en el que este creando el GIFO.';
    cuadrado.appendChild(pCreateGifo);
})  */
/* paso1H5.addEventListener('click', ()=>{
    paso1H5.classList.add('h5_active');
}) */
 let divCamara;
paso1.addEventListener('click', () => {
    paso1.classList.toggle('paso_active');
    paso1H5.classList.add('h5_active');
    paso2.classList.remove('paso_active');
    paso2H5.classList.remove('h5_active');
    paso3.classList.remove('paso_active');
    paso3H5.classList.remove('h5_active');
    title.innerHTML='¿Nos das acceso<br> a tu camara?';
    paragraph.innerHTML='El acceso a tu camara sera valido solo<br> por el tiempo en el que este creando el GIFO.';
    
    divCamara.classList.add('hidden');
    btnComenzarGifo.classList.add('hidden');
});
paso2.addEventListener('click', () => {
    paso1.classList.remove('paso_active');
    paso1H5.classList.remove('h5_active');
    paso2.classList.toggle('paso_active');
    paso2H5.classList.add('h5_active');
    paso3.classList.remove('paso_active');
    paso3H5.classList.remove('h5_active');
    title.classList.add('hidden');
    paragraph.classList.add('hidden');
    divCamara = document.createElement('div');
    divCamara.classList.add('divCamara');
    cuadrado.appendChild(divCamara); 
    btnComenzarGifo.textContent='Grabar';
    /* const btnGrabar = document.createElement('button');
    btnGrabar.classList='btnGrabar'; */

    
})
paso3.addEventListener('click', () => {
    paso1.classList.remove('paso_active');
    paso1H5.classList.remove('h5_active');
    paso2.classList.remove('paso_active');
    paso2H5.classList.remove('h5_active');
    paso3.classList.toggle('paso_active');
    paso3H5.classList.toggle('h5_active');
   // divCamara.remove();
    
})
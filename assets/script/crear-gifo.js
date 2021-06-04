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
const paso1 = document.getElementById('paso1');
const paso2 = document.getElementById('paso2');
const paso3 = document.getElementById('paso3');

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
 
paso1.addEventListener('click', () => {
    paso1.classList.toggle('paso_active');
    paso1H5.classList.toggle('h5_active');

    /* const h1AccesoCamara = document.createElement('h1');
    h1AccesoCamara.classList.add('title');
    h1AccesoCamara.innerHTML='¿Nos das acceso<br> a tu camara?';
    cuadrado.appendChild(h1AccesoCamara);
    const pAccesoCamara = document.createElement('p');
    pAccesoCamara.innerHTML='El acceso a tu camara sera valido solo<br> por el tiempo en el que este creando el GIFO.';
    cuadrado.appendChild(pAccesoCamara); */
});
paso2.addEventListener('click', () => {
    paso2.classList.toggle('paso_active');
    paso2H5.classList.toggle('h5_active');

    /* const divCamara = document.createElement('div');
    divCamara.classList.add('divCamara');

    cuadrado.appendChild(divCamara); */
    
})
paso3.addEventListener('click', () => {
    paso3.classList.toggle('paso_active');
    paso3H5.classList.toggle('h5_active');
    
})
//console.log(localStorage.getItem(''));
let storageFavoritos = localStorage.getItem('favoritos');
let favoritos; 
if(storageFavoritos){
     favoritos = JSON.parse(storageFavoritos);
}
console.log(favoritos);
favoritos.forEach(IDgifo => {
    newGifo(IDgifo);
});
async function newGifo(id) {
    
    const apiKey = 'SNJ9a5GbDjgSmOddC8ab03rQXLhxjPvS';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&gif_id=${id}`;

    try {
        const response = await fetch(url);
        const info = await response.json();
        const gifsConteiner = document.getElementById('gifsConteiner');
        for(let i = 0 ; i< cantidad ; i++){
            let img = document.createElement('img');
            img.src = info.data[i].images.original.url;
            conteiner.appendChild(img);
        }
       // cant();
       console.log(info.data[0]);
        /* const img = document.getElementById('img');
        img.src =info.data[0].images.original.url  */
        //console.log(info.data[0].id);
    } catch (err) {
        console.log(err);
    }

}
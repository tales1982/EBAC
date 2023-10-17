
function findLyrics(artist, song) {
    return fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`);//ja nao fuciona essa API
}

const from = document.querySelector('#lyrics_form');
from.addEventListener('submit',el =>{
    el.preventDefault();
    doSubmit()


})

async function doSubmit() {
    const lyrics_el = document.querySelector('#lyrics');
    const artist = document.querySelector('#artist');
    const song = document.querySelector('#song');

    if (artist.value && song.value) {
        lyrics_el.innerHTML = '<div class="spinner-grow" role="status"><span class="sr-only">Carregando...</span></div>';
        
        // async await
        const lyricsResponse = await findLyrics(artist.value, song.value);
        const data = await lyricsResponse.json();
        lyrics_el.innerHTML = data.lyrics;
    } else {
        lyrics_el.innerHTML = 'Por favor, preencha ambos os campos.';
    }
}

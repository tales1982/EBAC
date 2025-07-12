function bestRockBand(band){
    return new Promise((resolve, reject)=>{
    if(band == 'Queen'){
        resolve({//Vou passar um Objeto como retorno
            success: true,
            bandName: band,
            masg :`${band} is the best rock band ever!`
        })
    }else{
        reject({
            success: false,
            msg: 'I\'m not sure!'
        })
    }
    })
}

function bestRockSong(response){
    return new Promise((resolve, reject)=>{
        if(response.success){
            resolve(`Bohemian Rhapsody by ${response.bandName}`)
        }else{
            reject('Do you know Queen?')
        }
    })
}
// Usando somento o Promise, tenho que usar o .then
/*
bestRockBand('Queen')
    .then(response =>{
        console.log(`Checking the answer...`)
        return bestRockBand(response)
    })
    .then(response =>{
        console.log('Finding the best song...')
        console.log(response)
    })
    .catch(err => {
        console.log(err.msg)
    })
*/
//Agora usando o async / await 
// Com o async await meu codigo vai ficar mais curto e mais limpo.

async function doTheJob(){
    try{
        const bestRockBandResponse = await bestRockBand('Qeen');
    console.log(bestRockBandResponse);

    const bestRockSongResponse = await bestRockSong(bestRockBandResponse)
    console.log(bestRockSongResponse);
    }catch(err){
        console.log(err.msg)
    }
    
}

doTheJob()

//Para tratar o erro posso fazer com o 
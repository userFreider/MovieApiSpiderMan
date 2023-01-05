const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '0c5740f9cdmsh359805c605c55cbp1b2ef0jsn4f66428a56cd',
        'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
    }
};

fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=spider%20man', options)
    .then(response => response.json())
    .then((data) => {
        console.log(data)
        //capturamos la data
        const arryMovies = data.d
        arryMovies.map((element) => {
            //imprime por consola cada elemento 
            console.log(element);
            //capturamos los datos 
            const title = element.l
            const ranking = element.rank
            const image = element.i.imageUrl
            const cast = element.s

            const poster = `
            
                        <div class=" flex-row align-items-center justify-content-center ">
                            <img src="${image}" alt="" class="img-fluid">
                            <h2 class="mt-3 mb-4">${title}</h2>
                            <span>Actores:<small>${cast}</small></span>
                            <p class="mt-2 mb-2">Ranking:${ranking}</p>
                        </div>

                           `

                           document.getElementById('container').innerHTML += poster;

        })

    })
    .catch(err => console.error(err));
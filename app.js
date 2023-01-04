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
        arryMovies.map((element) =>{
            //imprime por consola cada elemento 
            console.log(element);
            //capturamos los datos 
            const title = element.l
            const ranking = element.rank
            const image = element.i.imageUrl
            const cast = element.s
          
        })
        
    })
	.catch(err => console.error(err));
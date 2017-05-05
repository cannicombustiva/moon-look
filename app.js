var request = new Request('https://api.nasa.gov/planetary/apod?api_key=CxIwG7Ukjp9FTyWgjkSuTqg1NRjZ9Pkmuy0rKGCH');
console.log(request);
fetch(request).then(function(response){
    return response.json().then(function(json){
        console.log(json);
    });
});
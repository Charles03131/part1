
/*
let favoriteNumber=[7]
let baseURL="http://numbersapi.com";



//question 1
$.getJSON(`${baseURL}/${favoriteNumber}?json`).then(data=>{
    console.log(data)
});



//question 2

let favs=[7,33,11]


$.getJSON(`${baseURL}/${favs}?json`).then(data=>{
console.log(data)
});




//question 3



Promise.all(
    Array.from({length:4},() =>{
        return $.getJSON(`${baseURL}/${favoriteNumber}?json`);
    })
).then(facts=> {
    facts.forEach(data=> $("body").append(`<p>${data.text}</p>`));
});

*/
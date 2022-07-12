const queryString = document.location.search;
console.log(queryString);
const params = new URLSearchParams(queryString);
console.log(params);

const id=1;

//if (params.has("id")) {
//    id = params.get("id");
//} else {
//    document.location.href = "index.html";
//}

// const charactersUrl = /character/myarray;
// const corsEnabledUrl = charactersUrl;
const myarray = [{"id":1,"name":"Lumber-Jack","status":" Hand stitiched and carefully treated at our 148 year old tannery","species":"Cow-skin","type":"I do not know","gender":"Male","origin":"Highest calibre cow skin leather reared on the plains of serria nervada","location":{"name":"Earth (Replacement Dimension)","url":"https://rickandmortyapi.com/api/location/20"},
"image":"https://fishcab.no/api/character/images/boot-5.jpg","episode":"345 kr",
"url":"https://rickandmortyapi.com/api/character/5","created":"2017-11-04T19:26:56.301Z"},{"id":2,"name":"Roughneck Boots","status":"Available","species":"Human","type":"","gender":"Male","origin":"Earth (C-137)","location":{"name":"Earth (Replacement Dimension)","url":"https://rickandmortyapi.com/api/location/20"},
"image":"https://fishcab.no/api/character/images/boot-2.jpg","episode":"898 Kr","url":"https://rickandmortyapi.com/api/character/2","created":"2017-11-04T18:50:21.651Z"}];


 console.log(myarray);
// fetch(detailUrl)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(json) {
const  json=myarray[0];
    console.log(json);


createCharacter(json);
//     })
//     .catch(function() {
//      document.location.href = "error.html";
//     });

function createCharacter(json) {
console.dir(json);

    // get the loader div
    const loader = document.querySelector(".breadcrumb-nav");
    // hide the loader
    loader.style.display = "none";

    // get detail container div
    const detailContainer = document.querySelector(".detail-container");
    // remove the hidden class
    detailContainer.classList.remove("hidden");

    const image = document.querySelector(".details-image");
    image.alt = json.name;

        // set the img.src property depending on what properties are available in the JSON
        if (json.image) {
            image.src = json.image;
        } else if (json.image_background) {
            image.src = json.image_background;
        } else {
            image.src = "https://via.placeholder.com/250";
        }

    const name = document.querySelector("h1");
    name.innerHTML = json.name;

    const gameCount = document.querySelector("#status");
    gameCount.innerHTML = json.status;

    const description = document.querySelector("#species");
    description.innerHTML = json.species;

    const originName = document.querySelector("#origin");
    originName.innerHTML = json.origin;

    const locationName = document.querySelector("#location");
    locationName.innerHTML = json.location;
//   title the page with the character name and the previous document title

    document.title = json.name + " | " + document.title;
}

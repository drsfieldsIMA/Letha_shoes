// const creatorsUrl = "https://fishcab.no/api/character/manyboot.html";
// const corsEnabledUrl = "https://cors-anywhere.herokuapp.com/" + creatorsUrl;

const corsEnabledUrl="js/character/manyboot.html"; 
fetch(corsEnabledUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        handleJson(json);
    })
    .catch(function(error) {
        console.log(error);
    });

function handleJson(json) {
    const results = json.results;
  //  console.dir(results);

//  row results is the encasing class
    const resultsContainer = document.querySelector(".row.results");

    let html = "";

    results.forEach(function(result) {
        let imageUrl = "https://via.placeholder.com/250";
        let i = 0;
//        console.dir(result);
// within the JSON object each URL is attached to an image label
        if (result.image) {
            imageUrl = result.image;
        }

        html += ` <div class="col-sm-6 col-md-4 col-lg-3">
                        <div class="card">
                             <img class="image" src="${imageUrl}" alt="${result.name}">
                                <div class="details">
                                <h4 class="name">${result.name}</h4>
                                <p> Pairs left: ${result.episode}</p>
                                <a class="btn btn-primary" href="details.html">Buy Now</a>
                            </div> 
                        </div>
                    </div>`
    });

    resultsContainer.innerHTML = html;
}
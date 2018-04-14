function search() {
    let config = {};
    let title = document.getElementById("titleInput").value;
    let pTitle = title.replace(/ /g, "+")
    fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=72961f58&t=${pTitle}`)
    .then(function(response) {
        console.log(response)
        return response.json()
    })
    .then(function(movieInfo) {
        console.log(movieInfo)
        //let movieObj = JSON.parse(jsonStr)
        if (movieInfo["Response"] == "False") {
            alert("Your title was not found. Please try rephrasing or searching a new title.")
        }
        checkTitle(movieInfo)
    })
}

function checkTitle(movieInfo) {
    document.getElementById("title").innerHTML = movieInfo["Title"]
    document.getElementById("year").innerHTML = movieInfo["Year"]
    document.getElementById("rating").innerHTML = movieInfo["Rated"]
    document.getElementById("runtime").innerHTML = movieInfo["Runtime"]
    document.getElementById("genre").innerHTML = movieInfo["Genre"]
    document.getElementById("director").innerHTML = movieInfo["Director"]
    document.getElementById("actors").innerHTML = movieInfo["Actors"]
    document.getElementById("plot").innerHTML = movieInfo["Plot"]
    document.getElementById("language").innerHTML = movieInfo["Language"]
    document.getElementById("country").innerHTML = movieInfo["Country"]
}
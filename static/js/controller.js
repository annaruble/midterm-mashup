function search() {
    let config = {};
    let title = document.getElementById("titleInput").value;
    let pTitle = title.replace(/ /g, "+")
    let year = document.getElementById("yearInput").value;
    fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=72961f58&t=${pTitle}&type=movie&y=${year}`)
    .then(function(response) {
        console.log(response)
        return response.json()
    })
    .then(function(movieInfo) {
        console.log(x = movieInfo)
        //let movieObj = JSON.parse(jsonStr)
        if (movieInfo["Response"] == "False") {
            alert("Your title was not found. Please try rephrasing or searching a new title.")
        }
        checkTitle(movieInfo)
        let trailQ = movieInfo["Title"] + " " + movieInfo["Year"] + " Trailer"
        console.log(trailQ)
        getPromo(trailQ)
    })
}


function checkTitle(movieInfo) {
    document.getElementById("titleYr").innerHTML = movieInfo["Title"] + " (" + movieInfo["Year"] + ")"
    document.getElementById("rating").innerHTML = movieInfo["Rated"]
    document.getElementById("runtime").innerHTML = movieInfo["Runtime"]
    document.getElementById("genre").innerHTML = movieInfo["Genre"]
    document.getElementById("actorsDir").innerHTML = movieInfo["Actors"] + " | Director: " + movieInfo["Director"]
    document.getElementById("plot").innerHTML = movieInfo["Plot"]
    document.getElementById("Tscore").innerHTML = movieInfo["Ratings"][1]["Value"]
    document.getElementById("Mscore").innerHTML = movieInfo["Ratings"][2]["Value"]

}
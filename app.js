var trailerId

$(function() {
    $("form").on("submit", function(e) {
       e.preventDefault();
       // prepare the request
       var request = gapi.client.youtube.search.list({
            part: "snippet",
            type: "video",
            q: encodeURIComponent($("#search").val()).replace(/%20/g, "+"),
            maxResults: 1,
            order: "viewCount"
            topicId: "/m/02vxn"
            
       }); 
       // execute the request
       request.execute(function(response) {
          var results = response.result;
          $.each(results.items, function(index, item){
              trailerId = item.id.videoId
          })
          
       });
    });
    


function init() {
    gapi.client.setApiKey("YOUR_PUBLIC_KEY");
    gapi.client.load("youtube", "v3", function() {
        // yt api is ready
    });
};
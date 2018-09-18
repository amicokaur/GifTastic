var ideas = ["final fantisy" , "hey arnold", "mario"];
function addThings() {
  $('#button').empty();
  for (var i=0; i<ideas.length; i++){
     var button = $("<button>").text(ideas[i])
     button.attr("data", ideas[i])
     $("#button").append(button)
     }
}
addThings()

$("form").submit(function(e){
  e.preventDefault();
  var ideatag = $("#data-input")
ideas.push(ideatag.val())
addThings()
});



$(document).on("click","button" ,function() {
    
      var data = $(this).attr("data");

      
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        data + "&api_key=dc6zaTOxFJmzC&limit=10";
        
        $.ajax({
        url: queryURL,
        method: "GET"
      })
        
        .then(function(response) {
          console.log(queryURL);

          console.log(response);
          // storing the data from the AJAX request in the results variable
          var results = response.data;

          // Looping through each result item
          for (var i = 0; i < results.length; i++) {

            // Creating and storing a div tag
            var dataDiv = $("<div>");

            // Creating a paragraph tag with the result item's rating
            var p = $("<p>").text("Rating: " + results[i].rating);

            // Creating and storing an image tag
            var dataImage = $("<img>");
            // Setting the src attribute of the image to a property pulled off the result item
            dataImage.attr("src", results[i].images.fixed_height.url);

            // Appending the paragraph and image tag to the animalDiv
            dataDiv.append(p);
            dataDiv.append(dataImage);

            // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
            $("#images").prepend(dataDiv);

            function changeState(){
                var state = $(this).attr("data-state");
                var animateImage = $(this).attr("data-animate");
                var stillImage = $(this).attr("data-still");
                 if (state == "still") {
                    $(this).attr("src", animateImage);
                    $(this).attr("data-state", "animate");
                }
                 else if (state == "animate") {
                    $(this).attr("src", stillImage);
                    $(this).attr("data-state", "still");
                }
            }
              $(document).on("click", ".gif", changeState);


          }
        });
    });

// var ideas = ["final fantisy" , "hey arnold", "mario"];
// for (var i=0; i<ideas.length; i++){
//    var button = $("<button>").text(ideas[i])
//    button.attr("data", ideas[i])
//    $("#button").append(button)
//    }

// $("button").on("click", function() {
    
//       var data = $(this).attr("data");

      
//       var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
//         data + "&api_key=dc6zaTOxFJmzC&limit=10";
        
//         $.ajax({
//         url: queryURL,
//         method: "GET"
//       })
        
//         .then(function(response) {
//           console.log(queryURL);

//           console.log(response);
//           // storing the data from the AJAX request in the results variable
//           var results = response.data;

//           // Looping through each result item
//           for (var i = 0; i < results.length; i++) {

//             // Creating and storing a div tag
//             var dataDiv = $("<div>");

//             // Creating a paragraph tag with the result item's rating
//             var p = $("<p>").text("Rating: " + results[i].rating);

//             // Creating and storing an image tag
//             var dataImage = $("<img>");
//             // Setting the src attribute of the image to a property pulled off the result item
//             dataImage.attr("src", results[i].images.fixed_height.url);

//             // Appending the paragraph and image tag to the animalDiv
//             dataDiv.append(p);
//             dataDiv.append(dataImage);

//             // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
//             $("#images").prepend(dataDiv);
//           }
//         });
//     });
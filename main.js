//wikipedia api https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=
// call back &callback=JSON_CALLBACK
// page

$(document).ready(function(){
  $("#searchButton").on('click',function(){
    $("#display-result").html("");

    var value = $("#userInput").val();
    $.ajax({
           url: 'https://en.wikipedia.org/w/api.php',
           data: { action: 'query', list: 'search', srsearch: value, format: 'json' },
           dataType: 'jsonp',
           success: function (apiResult) {

             for (var i = 0; i < apiResult.query.search.length; i++){
                $("#userInput").val(" ")
                $('#display-result').append('<div class="post"><a target="_blank" href="https://en.wikipedia.org/wiki/'+apiResult.query.search[i].title+'"><h1>'+apiResult.query.search[i].title+'</h1>'+'<p>'+apiResult.query.search[i].snippet+'</p></a></div>');
            }
           }
       });
  })
})

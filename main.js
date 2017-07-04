$(document).ready(function() {
  // Search button is clicked run
  $("#search").click(function(){

    // Search input .val();
    var wikiSearch = $("#wiki-search").val();

    // API url with search form
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ wikiSearch +"&format=json&callback=?";

    // Wikipedia API ajax call
          $.ajax({
            type: "GET",
            url: url,
            async:false,
            jsonp: "callback",
            dataType: "json",
          success: function(result){
            // Get heading console.log(data[1][0]);
            // Get description console.log(data[2][0]);
            // Get link console.log(data[3][0]);
            console.log(result);
            $("#wiki-result").html('');
            for(var i = 0; i < result[1].length; i++) {
            $("#wiki-result").prepend("<li><a href= "+result[3][i]+">"+result[1][i] +"</a><p>"+result[2][i]+"</p></li>");
            //$("#wiki-result").value = '';
          }

        }});
    });
});

// Using XMLHttpRequest
$(function (){
  // Using jQuery
  $.ajax( {
      url: "https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json",
      dataType: 'jsonp',
      type: 'POST',
      headers: { 'Api-User-Agent': 'Example/1.0' },
      success: function(data) {
         // do something with data
         console.log('success', data);
         
      }
  } );
})

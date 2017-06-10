/*
  This app uses https://quotesondesign.com/api-v4-0/
*/

$(".new-quote").on('click', function(e) {
  e.preventDefault();
  $.ajax( {
    url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=',
    success: function (data) {
      var post = data.shift();
      $('.quote').html(post.content);
      $('.quote-by').html("-"+post.title);
      $('.quote-by').attr('href', 'http://www.google.com/search?q=' + post.title);
    },
    error: function(jqXHR, status, errort) {
      $("h3").html("Unable to generate quote due to: " + status + " " + errort);
    },
    cache: false
  });
});

var siteIndexTemplate = Handlebars.compile($('#site-index').html());

$('#all-sites-show').click(function(e){
  $('#all-sites').show();
  $('#my-sites').hide();
  $('#main').hide();
  $('#login-reg').hide();
  $('#create-sites').hide();
  $.ajax({
    method: "GET",
    url: "https://localhost:3000",
    dataType: "json"
  }).done(function(data){
    var siteIndexTemplate = Handlebars.compile($('#site-index').html());
    var siteHTML = siteIndexTemplate({site:data});
    $('#populate-sites').html('');
    $('#populate-sites').append(siteHTML);
  }).fail(function(data){
    console.error(data);
  });
});


var siteIndexTemplate = Handlebars.compile($('#site-index').html());

$('#all-sites-show').click(function(e){
  // $('#all-sites').show();
  $('#my-sites').show();
  $('#main').hide();
  $('#login-reg').hide();
  $('#create-sites').hide();
  $.ajax({
    method: "GET",
    url: "http://localhost:3000" + "/sites",
    dataType: "json"
  }).done(function(data){
    var siteIndexTemplate = Handlebars.compile($('#site-index').html());
    var siteHTML = siteIndexTemplate(data);
    $('#populate-sites').html('');
    $('#populate-sites').html(siteHTML);
  }).fail(function(data){
    console.error(data);
  });
});

$('#my-sites-show').click(function(e){
  $('#all-sites').hide();
  $('#my-sites').show();
  $('#main').hide();
  $('#login-reg').hide();
  $('#create-sites').hide();
  $.ajax({
    method: "GET",
    url: "http://localhost:3000" + "/sites/mine",
    headers: {
        Authorization: 'Token token=' + token
      },
    dataType: "json"
  }).done(function(data){
    var siteIndexTemplate = Handlebars.compile($('#site-index').html());
    var siteHTML = siteIndexTemplate(data);
    // $('#populate-sites').html('');
    $('#populate-sites').html(siteHTML);
  }).fail(function(data){
    console.error(data);
  });
});


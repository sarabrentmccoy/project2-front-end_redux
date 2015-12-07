var siteIndexTemplate = Handlebars.compile($('#site-index').html());

$('#all').click(function(e){
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


$('#minimal').click(function(e){
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
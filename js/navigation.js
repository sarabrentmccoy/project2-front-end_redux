$('#login-reg-show').click(function(){
	$('#login-reg').show();
	$('#main').hide();
	$('#sites').hide();
});

$('#sites-show').click(function(){
	$('#sites').show();
	$('#main').hide();
	$('login-reg').hide();
})
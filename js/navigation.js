$('#login-reg-show').click(function(){
	$('#login-reg').show();
	$('#main').hide();
	$('#my-sites').hide();
	$('#create-sites').hide();
});

$('#my-sites-show').click(function(){
	$('#my-sites').show();
	$('#main').hide();
	$('#login-reg').hide();
	$('#create-sites').hide();
});

$('#home-show').click(function(){
	$('#my-sites').hide();
	$('#main').show();
	$('#login-reg').hide();
	$('#create-sites').hide();
});

$('#create-sites-show').click(function(){
	$('#my-sites').hide();
	$('#main').hide();
	$('#login-reg').hide();
	$('#create-sites').show();
	$('#all-sites').hide();
});


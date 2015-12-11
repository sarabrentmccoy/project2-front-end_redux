$('#login-reg-show').click(function(){
	$('#login-reg').show();
	$('#main').hide();
	$('#my-sites').hide();
	$('#create-sites').hide();
	$('#delete-sites').hide();
	$('#update-sites').hide();
});

$('#my-sites-show').click(function(){
	$('#my-sites').show();
	$('#main').hide();
	$('#login-reg').hide();
	$('#create-sites').hide();
	$('#delete-sites').hide();
	$('#update-sites').hide();
});

$('#home-show').click(function(){
	$('#my-sites').hide();
	$('#main').show();
	$('#login-reg').hide();
	$('#create-sites').hide();
	$('#delete-sites').hide();
	$('#update-sites').hide();
});

$('#create-sites-show').click(function(){
	$('#my-sites').hide();
	$('#main').hide();
	$('#login-reg').hide();
	$('#create-sites').show();
	$('#all-sites').hide();
	$('#delete-sites').hide();
	$('#update-sites').hide();
});

$('#delete-sites-show').click(function(){
	$('#my-sites').hide();
	$('#main').hide();
	$('#login-reg').hide();
	$('#delete-sites').show();
	$('#create-sites').hide();
	$('#all-sites').hide();
	$('#update-sites').hide();
});


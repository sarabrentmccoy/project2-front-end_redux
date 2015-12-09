var proj_twoapi = {
  url: 'http://localhost:3000',

  ajax: function(config, cb) {
    $.ajax(config).done(function(data, textStatus, jqxhr) {
      cb(null, data);
    }).fail(function(jqxhr, status, error) {
      cb({jqxher: jqxhr, status: status, error: error});
    });
  },

  register: function (credentials, callback) {
    this.ajax({
      method: 'POST',
      // url: 'http://httpbin.org/post',
      url: this.url + '/register',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(credentials),
      dataType: 'json'
    }, callback);
  },

  login: function (credentials, callback) {
    this.ajax({
      method: 'POST',
      // url: 'http://httpbin.org/post',
      url: this.url + '/login',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(credentials),
      dataType: 'json'
    }, callback);
  },

  logout: function (credentials, callback) {
    this.ajax({
      method: 'DELETE',
      url: this.url + '/logout/',
      headers: {
        Authorization: 'Token token=' + token
      } 
    })
  },
  //dont need to be logged in 
  //getSites
  //getVotes


  //authenticated actions
  createSite: function (token, new_site, callback) {
    this.ajax({
      method: 'POST',
      url: this.url + '/sites',
      headers: {
        Authorization: 'Token token=' + token
      },
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(new_site),
      dataType: 'json',
    }, callback);
  },

  createVote: function (token, new_vote, callback) {
    this.ajax({
      method: 'POST',
      url: this.url + '/votes',
      headers: {
        Authorization: 'Token token=' + token
      },
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(new_vote),
      dataType: 'json',
    }, callback);
  },

  updateSite: function (token, site, callback) {
    this.ajax({
      method: 'PATCH',
      url: this.url + '/',
      headers: {
        Authorization: 'Token token=' + token
      },
      contentType: 'application/json, charset=utf-8',
      data: JSON.stringify(updated_site),
      dataType: 'json',
    }, callback);
  },

  deleteSite: function (token, site, callback) {
    this.ajax({
      method: 'DELETE',
      url: this.url + '/', 
      headers: {
        AuthorizatioN: 'Token token=' + token
      },
      contentType: 'application/json, charset=utf-8',
      data: JSON.stringify(deleted_site)
    })
  }

};

var token;
var id;

$(function() {
  var form2object = function(form) {
    var data = {};
    $(form).find("input").each(function(index, element) {
      var type = $(this).attr('type');
      if ($(this).attr('name') && type !== 'submit' && type !== 'hidden') {
        data[$(this).attr('name')] = $(this).val();
      }
    });
    return data;
  };

  var wrap = function wrap(key, val) {
    var obj = {};
    obj[key] = val;
    return obj;
  };

  var callback = function callback(error, data) {
    if (error) {
      console.error(error);
      $('#result').val('status: ' + error.status + ', error: ' +error.error);
      return;
    }
    $('#result').val(JSON.stringify(data, null, 4));
  };

  $('#register').on('submit', function(e) {
    var credentials = wrap('credentials', form2object(this));
    proj_twoapi.register(credentials, callback);
    e.preventDefault();
    $('#login-reg').show();
    $('#main').hide();
    $('#my-sites').hide();
    $('#create-sites').hide();
  });


  $('#login').on('submit', function(e) {
    e.preventDefault();

    var credentials = wrap('credentials', form2object(this))
    proj_twoapi.login(credentials, function(err, data){

      if (err) {
        console.log(err)
      } else {
      token = data.user.token;
      id = data.user.id;
      console.log("You're logged in!");
      }
    });
  });

  $('#create-sites form').on('submit', function(e) {
    e.preventDefault();
    
    var new_site = wrap('site', form2object(e.target));
    console.log(new_site);
    proj_twoapi.createSite(token, new_site, function(err, data) {
      if(err) {
        console.log(err)
      } else{
        console.log(data);
      }
    });

    return false;
  });


  // $('#delete-site').on('submit', function(e) {
  //   e.preventDefault();
   
  //   var deleted_site = wrap('site', form2object(this));
  //   proj_twoapi.deleteSite()
  //     if(err) {
  //       console.log(err)
  //     } else{
  //       console.log(data);
  //     }
  //   });
  // });


 });
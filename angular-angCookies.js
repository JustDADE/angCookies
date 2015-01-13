angular.module('angCookies', []).factory('$angCookies', function() {
  return {
    all: function() {
      var cookie = {};
      var dCookie = document.cookie;

      if (dCookie) {
        var cookieList = dCookie.split(';');
        for (var i=0; i<cookieList.length; i++) {
          var split = cookieList[i].split('=');
          cookie[split[0].trim()] = split[1];
        }
      } else {
        cookie = undefined;
      }

      return cookie;
    },
    get: function(name) {
      var name = name + "=";
      var cookieList = document.cookie.split(';');
      for(var i=0; i<cookieList.length; i++) {
        var cookie = cookieList[i];
        while (cookie.charAt(0)==' ') cookie = cookie.substring(1);
        if (cookie.indexOf(name) == 0) return cookie.substring(name.length, cookie.length);
      }
      return undefined;
    },
    set: function(name, value, data) {

      var cookie = name+'='+value+'; ';
      cookie+='domain=.'+document.domain+'; ';

      if (data != undefined) {
        if (data.expires) {
          var d = new Date();
          d.setTime(d.getTime() + (data.expires*24*60*60*1000));
          var expires = "expires="+d.toUTCString();
          cookie+=expires+'; ';
        }

        if (data.path) {
          cookie+='path='+data.path+'; ';
        }
      }

      document.cookie=cookie;
    },
    remove: function(name, data) {
      if (data) {
        data.expires = -1;
        this.set(name, '', data);
      } else if (this.get(name)) {
        this.set(name, '', { expires: -1 });
      }
    }
  }
});

function Router(routes) {
  try {
    if (!routes) {
      throw 'error: routes = null';
    }
    this.constructor(routes);
    this.init();
  } catch (e) {
    console.error(e);
  }
}

Router.prototype = {
  routes: null,
  rootElem: null,
  constructor (routes) {
    this.routes = routes;
    this.rootElem = document.getElementById('app');
  },
  init () {
    let r = this.routes;
    (function (scope, r) {
      window.addEventListener('hashchange', function () {
        scope.hasChanged(scope, r);
      });
    })(this, r);
    this.hasChanged(this, r);
  },
  hasChanged (scope, r) {
    if (window.location.hash.length > 0) {
      for (let i = 0, length = r.length; i < length; i++) {
        let route = r[i];
        if (route.isActiveRoute(window.location.hash.substr(1))) {
          scope.goToRoute(route.htmlName);
        }
      }
    } else {
      for (let i = 0, length = r.length; i < length; i++) {
        let route = r[i];
        if (route.default) {
          scope.goToRoute(route.htmlName);
        }
      }
    }
  },
  goToRoute (htmlName) {
    (function (scope) {
      let url = 'views/' + htmlName,
        xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          scope.rootElem.innerHTML = this.responseText;
        }
      };
      xhttp.open('GET', url, true);
      xhttp.send();
    })(this);
  }
};
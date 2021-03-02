(function () {
  function init() {
    let router = new Router([
      new Route('home', 'Home.html', true),
      new Route('about', 'About.html')
    ]);
  }
  init();
}());
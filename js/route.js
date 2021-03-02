function Route(name, htmlName, defaultRoute) {
  try {
    if (!name || !htmlName) {
      throw 'error: name and html name = null';
    }
    this.constructor(name, htmlName, defaultRoute);
  } catch (e) {
    console.error(e);
  }
}

Route.prototype = {
  name: null,
  htmlName: null,
  default: null,
  constructor (name, htmlName, defaultRoute) {
    this.name = name;
    this.htmlName = htmlName;
    this.default = defaultRoute;
  },

  isActiveRoute (hashedPath) {
    return hashedPath.replace('#', '') === this.name;
  }
}
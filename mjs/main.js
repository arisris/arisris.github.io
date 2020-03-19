import routes from "./routes.js";
import "./styles.js";

const pages = {};

Object.keys(routes).forEach(key => {
  pages[key] = {
    onmatch(attrs, pathname) {
      return routes[key].onmatch
        ? routes[key].onmatch(attrs, pathname)
        : routes[key];
    },
    render(v) {
      return v;
    }
  }
});

b.setDebug(1);
m.route(document.body, "/", pages);
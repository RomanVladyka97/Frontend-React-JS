import { RenderMovies } from "./src/pages/popular.js";
const root = document.getElementById('app');

const routes = [
    {
        match: (url) => {
            return url === '/';
        },
        renderRoute: RenderMovies,
    }
];
 
class Router {
  constructor(routes) {
    this._routes = routes;
 
    window.history.pushState = (data, title, ulr) => {
      History.prototype.pushState.apply(window.history, [data, title, ulr]);
      this.reroute();
    }
 
    window.onpopstate = () => {
      this.reroute();
    }
  }
 
  reroute() {
    const matchedRoute = this._routes.find(route => {
      const matched = route.match(window.location.pathname)
 
      return matched;
    })
 
    matchedRoute.renderRoute();
  }
}
 
const router = new Router(routes);
 
router.reroute();
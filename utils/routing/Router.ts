import Route from "./Route";

class Router {
  private static __instance: any;
  private routes: any[];
  private history: History;
  private _currentRoute: null;
  constructor() {
    if (Router.__instance) {
      return Router.__instance;
    }

    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;
    Router.__instance = this;
  }

  use(pathname: string, block: any, props: object) {
    const route = new Route(pathname, block, props);
    this.routes.push(route);
    return this;
  }

  start() {
    window.onpopstate = event => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this._onRoute(event.currentTarget.location.pathname);
    };
    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname: string) {
    const route: any = this.getRoute(pathname);
    if (!route) {
      return;
    }
    if (this._currentRoute) {
      this._currentRoute.leave();
    }

    route.render(route, pathname);
  }

  go(pathname: string) {
    this.history.pushState({}, "", pathname);
    this._onRoute(pathname);
  }

  getRoute(pathname: string) {
    this._currentRoute= this.routes.find(route => route.match(pathname));
    return this._currentRoute
  }
}

export default Router;

import {mediatorModal} from "../../pages/modal";

export default class Route {
  private _pathname: any;
  private _blockClass: any;
  private _block: null;
  private _props: any;
  constructor(pathname: string, view: any, props: object) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    // if (this._block) {
    //   this._block.hide();
    // }
  }

  match(pathname: string) {
    return (pathname=== this._pathname);
  }

  render() {
    if (this._props.typeBlock){
      mediatorModal.update(this._props.type)
    } else {
      window.history.go(0)
    }
    // this._block = new this._blockClass();

  }
}

export default class Route {
  private _pathname: any;
  private _blockClass: any;
  private _props: any;
  private _block: any;

  constructor(pathname: string, view: any, props: object) {
    this._pathname = pathname;
    this._blockClass = view;
    this._props = props;
    this._block=null
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this._block) {
      this._block.hide();
    }
  }

  match(pathname: string) {
    return (true);
  }

  render() {
    this._block = new this._blockClass({
      parentId: this._props.parentId,
      tagName: this._props.tagName,
      classes: this._props.classes,
      id: this._props.id
    });
    if (this._block!==null) this._block.componentDidMount();
  }
}

import {html} from "lit";

const tmpl_text=(o)=>html`<p class="${o.classWrapper}"><span class="${o.classText}">${o.text}</span></p>`

export default tmpl_text
import {html} from "lit";

const tmpl_button=(o)=>html`<a target="_self" href="${o.href}" type="${o.type}" class="${o.class}" @click="${o.click}">${o.text}</a>`
export default tmpl_button
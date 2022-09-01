import {html} from "lit";

const tmpl_button=(params)=>html`<button target="_self" href="${params.href}" type="${params.type}" class="${params.class}" @click="${params.click}">${params.text}</button>`
export default tmpl_button
import {html} from "lit";

const tmpl_image=(o)=>html`
<img src="${o.path}" alt="${o.alt}" class="${o.class}"/>`
export default tmpl_image
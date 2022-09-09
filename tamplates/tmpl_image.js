import {html} from "lit";

const tmpl_image=(params)=>html`
<img src="${params.path}" alt="${params.alt}" class="${params.class}" @click="${params.click}"/>`
export default tmpl_image

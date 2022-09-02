import {html} from "lit";

const tmpl_text=(params)=>html`<p class="${params.classWrapper}"><span class="${params.classText}">${params.text}</span></p>`

export default tmpl_text
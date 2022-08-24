import {html} from "lit";
const tmpl_input=(o)=>html`
    <div class="${o.class}">
        <input class="form__input-text"  name="${o.name}" style="border-style: none; position: relative" type="${o.type}" placeholder="${o.placeholder}"/>\
    </div>`
   
export default tmpl_input
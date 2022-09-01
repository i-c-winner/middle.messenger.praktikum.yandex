import {html} from "lit";
const tmpl_input=(params)=>html`
    <div class="${params.class}">
        <input class="form__input-text"  name="${params.name}" style="border-style: none; position: relative" type="${params.type}" placeholder="${params.placeholder}"/>\
    </div>`
   
export default tmpl_input
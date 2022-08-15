import {html, render} from "lit";
import {Error} from "../components/error";

const error=new Error()
const container=document.getElementById('error')
const element=html`<div class="error-fourhunder">
    ${error.render()}
</div>`

render(element, container)



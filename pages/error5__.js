import {html, render} from "lit";
import {Error} from "../components/error";

const error=new Error()
const container=document.querySelector('.error')
const element=html`<div class="error-fourhunder">
         ${error.render('500')}
</div>`

render(element, container)
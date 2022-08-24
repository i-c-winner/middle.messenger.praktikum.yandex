import {html, render} from "lit";
import {RegistrationForm} from "../components/registrationForm";
const forma=new RegistrationForm()
const element=html`
<div class="registration-form">
    ${forma.render()}
</div>
`
const container=document.getElementById('registration')


render(element, container)
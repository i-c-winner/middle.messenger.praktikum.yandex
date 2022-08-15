import {html, render} from "lit";
import {RegistrationForm} from "../components/registrationForm";
const forma=new RegistrationForm()
const registration=html`
<div class="registration-form">
    ${forma.render()}
</div>
`
const element=document.getElementById('registration')


render(registration,element)
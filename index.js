import {html, render} from "lit";
import {LoginForm} from "./components/loginForm";
const forma=new LoginForm()
const login=html`
<div class="login">
    ${forma.render()}
</div>
`
const element=document.getElementById('root')


render(login,element)
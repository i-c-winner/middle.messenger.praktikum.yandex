import {LitElement, html} from 'lit';
import tmpl_input from "../tamplates/tmpl_input";
import tmpl_button from "../tamplates/tmpl_button";
export class LoginForm extends LitElement {
    constructor(props) {
        super(props);


    }

click(){
        window.open("http://localhost:3000/registration.html")
}
    render() {
        return html`
            <form class="form">
                <p class="form__title">Вход</p>
                           ${tmpl_input({name: "login", class: "form__input form__input_login",placeholder: "Имя", type: 'text'})}
                ${tmpl_input({name:"password", class: "form__input form__input_password",placeholder: "Пароль", type: 'text'})}
                <div class="form__buttons">
                    ${tmpl_button({
                        class: "form__button form__button_button",
                        text: "Авторизоваться",
                        href: 'pages/registration.html'
                    })}
                    ${tmpl_button({
                        class: "form__button form__button_link",
                        text: "Нет аккаунта?",
                        click:this.click,
                        href:''
                    })}
                </div>
            </form>
       
    `;
    }

}
customElements.define('login-form', LoginForm);
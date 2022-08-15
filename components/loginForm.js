import {LitElement, html} from 'lit';
import tmpl_input from "../tamplates/tmpl_input";
import tmpl_button from "../tamplates/tmpl_button";
export class LoginForm extends LitElement {
    constructor(props) {
        super(props);


    }


    render() {
        return html`
            <form class="form">
                <p class="form__title">Вход</p>
                ${tmpl_input({name: "display_name", class: "form__input form__input_login",placeholder: "Логин", type: 'text'})}
                ${tmpl_input({name:"password", class: "form__input form__input_password",placeholder: "Пароль", type: 'text'})}
                <div class="form__buttons">
                    ${tmpl_button({
                        class: "form__button form__button_button",
                        text: "Авторизоваться",
                        href: 'pages/main.html'
                    })}
                    ${tmpl_button({
                        class: "form__button form__button_link",
                        text: "Нет аккаунта?",
                        href:'pages/registration.html'
                    })}
                </div>
            </form>
       
    `;
    }

}
customElements.define('login-form', LoginForm);
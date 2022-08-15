import {html, LitElement} from 'lit'
import tmpl_input from "../tamplates/tmpl_input";
import tmpl_button from "../tamplates/tmpl_button";


export class RegistrationForm extends LitElement {
    constructor() {
        super();
    }
    click(){

    }
    render() {
        return html`
            <form class="form">
                <p class="form__title">Регистрация</p>
                           ${tmpl_input({name: "login", class: "form__input form__input_login",placeholder: "Имя", type: 'text'})}
                ${tmpl_input({name:"password", class: "form__input form__input_password",placeholder: "Пароль", type: 'text'})}
                <div class="form__buttons">
                    ${tmpl_button({
            class: "form__button form__button_button",
            text: "Зарегестрироваться",
            href: 'registration.html'
        })}
                    ${tmpl_button({
            class: "form__button form__button_link",
            text: "Войти",
            click:this.click,
            href:''
        })}
                </div>
            </form>`
    }
}
customElements.define('registration-form', RegistrationForm);
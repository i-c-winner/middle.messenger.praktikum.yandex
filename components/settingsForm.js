import {html, LitElement} from 'lit'
import tmpl_input from "../tamplates/tmpl_input";
import tmpl_button from "../tamplates/tmpl_button";


export class SettingsForm extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`
            <form class="form">         
                ${tmpl_input({name: "email", class: "form__input form__input_email",placeholder: "mail@yandex.ru", type: 'email'})}
                ${tmpl_input({name: "display_name", class: "form__input form__input_login",placeholder: "Логин", type: 'text'})}
                ${tmpl_input({name: "name", class: "form__input form__input_name",placeholder: "Имя", type: 'text'})}
                ${tmpl_input({name: "second_name", class: "form__input form__input_second-name",placeholder: "Фамилия", type: 'text'})}
                ${tmpl_input({name:"phone", class: "form__input form__input_phone",placeholder: "(0)-000-000-00-00", type: 'tel'})}
                ${tmpl_input({name:"password", class: "form__input form__input_password",placeholder: "******", type: 'text'})}
                ${tmpl_input({name:"password", class: "form__input form__input_password-again",placeholder: "******", type: 'text'})}
                <div class="form__buttons">
         
                    ${tmpl_button({
    class: "form__button form__button_link",
    text: "Изменить данные",
    click:this.click,
    href:'settings.html'
  })}         ${tmpl_button({
  class: "form__button form__button_link",
  text: "Изменить пароль",
  click:this.click,
  href:'settings.html'
})}         ${tmpl_button({
  class: "form__button form__button_link form__button_link_exit",
  text: "Выйти",
  click:this.click,
  href:'settings.html'
})}
                </div>
            </form>`
  }
}
customElements.define('settings-form', SettingsForm);
import {LitElement, html} from "lit";
import tmpl_text from "../tamplates/tmpl_text";
import tmpl_button from "../tamplates/tmpl_button";

export class Error extends LitElement{
    constructor(props) {
        super(props);
    }

    render(number) {
        return html`
            ${tmpl_text({
                text: number,
                classWrapper: 'error__text error__text_number'                
            })}
            ${tmpl_text({
                text: 'Мы уже фиксим',
                classWrapper: 'error__text error__text_answer'
            })}
            ${tmpl_button({
                text:'Назад к чатам',
                class: 'error__text error__text_link',
                href: 'main.html'
            })}
        <div class="error>        
        </div>`
    }
}

customElements.define('error-fourhunder',Error);
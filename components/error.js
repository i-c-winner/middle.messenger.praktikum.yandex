import {LitElement, html} from "lit";
import tmpl_text from "../tamplates/tmpl_text";

export class Error extends LitElement{
    constructor() {
        super();
    }

    render() {
        return html`
            ${tmpl_text({
                text: '404',
                classWrapper: 'error__text error__text_number'                
            })}
            ${tmpl_text({
                text: 'Мы уже фиксим',
                classWrapper: 'error__text error__text_answer'
            })}
            ${tmpl_text({
                text:'Назад к чатам',
                classWrapper: 'error__text error__text_link'
            })}
        <div class="error>        
        </div>`
    }
}

customElements.define('error-fourhunder',Error);
import {html, render} from "lit";
import {SettingsForm} from "../components/settingsForm";
import tmpl_image from "../tamplates/tmpl_image";
import tmpl_text from "../tamplates/tmpl_text";
// eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef
const avatar = require('../static/images/avatar.jpeg')
const avatarText="Имя"
const forma=new SettingsForm()
const settings=html`
    <div class="settings__title">
        ${tmpl_image({
    path: avatar,
    class: "image image_settings",
    alt: 'Аватар'
  })}
        ${tmpl_text({
    classWrapper:"settings__text settings__text_title",
    text: avatarText,
  })}
    </div>
   
<div class="settings-form">
  
    ${forma.render()}
</div>
`
const element=document.getElementById('settings')

render(settings,element)
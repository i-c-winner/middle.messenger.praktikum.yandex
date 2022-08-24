import {html, render} from "lit";
import tmpl_button from "../tamplates/tmpl_button";

const element=html`
<div style="display: flex; flex-flow: column ">
    ${tmpl_button({
        text: "Страница с ошибкой 404",
        color: "red",
        href: "error404.html"
    })}   
    ${tmpl_button({
        text: "Страница с ошибкой 500",
        color: "red",
        href: "error5__.html"
    })}  
    ${tmpl_button({
        text: "Страница настройки",
        color: "red",
        href: "settings.html"
    })}
</div> `

const container=document.getElementById('root')

render(element, container)


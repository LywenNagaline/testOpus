//J'importe ma fonction de récupération du json
import { TodoList } from "./components/TodoList.js"
import { fetchJSON } from "./functions/api.js"
import { createElement } from "./functions/dom.js"

try {
    //J'appelle ma fonction en indiquant l'url sur laquelle trouver les données.
    const todos = await fetchJSON('https://jsonplaceholder.typicode.com/todos?_limit=5')
    //console.log(todos)
    // je récupère mes listes
    const list = new TodoList(todos)
    // et les rajoute à l'élément qui a l'id todolist
    list.appendTo(document.querySelector('#todolist'))

} catch (e) {
    //je créer un élément html dans le DOM dans laquelle je vais pouvoir afficher mon erreur si jamais je ne peux pas afficher els données
    //j'utilise notamment les éléments de bootstrap pour aller plus vite
    const alertElement = createElement('div', {
        class: 'alaert alert-danger m-2',
        role : 'alert'
    })
    //je rajoute du texte dans ma div fraichement créée
    div.innerText = 'Impossible de charger les éléments'
    //et je la mets en amont
    document.body.prepend(alertElement)
}
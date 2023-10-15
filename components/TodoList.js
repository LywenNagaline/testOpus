/**
 * @typedef {object} Todo
 * @property {number} id
 * @property {string} title
 * @property {boolean} completed
 */

// L'objectif ici est de créer un classe qui va construire des todos
export class TodoList {

    // on définit par défaut que todos sera un tableau vide
    /**@type {Todo[]} */
    #todos = []

    /**
     * 
     * @param {Todo[]} todos 
     */
    constructor (todos){
        // je commence par initialiser les propriétés
        this.#todos = todos //cette propriété est privée car nous n'en avons pas besoin depuis l'extérieur
    }


    /**
     * 
     * @param {HTMLElement} element 
     */
    //on ajoute la todolist à cet element là
    appendTo (element) {
        element.innerHTML = `
            <form class="d-flex pb-4">
                <input required="" class="form-control" type="text" placeholder="Acheter des patates..." name="title" data-com.bitwarden.browser.user-edited="yes">
                <button class="btn btn-primary">Ajouter</button>
            </form>
            <main>
                <div class="btn-group mb-4" role="group">
                    <button type="button" class=" btn btn-outline-primary active" data-filter="all">Toutes</button>
                    <button type="button" class=" btn btn-outline-primary" data-filter="todo">A faire</button>
                    <button type="button" class=" btn btn-outline-primary" data-filter="done">Faites</button>
                </div>

                <ul class="list-group">  
                    <li class="todo list-group-item d-flex align-items-center">
                        <input class="form-check-input" type="checkbox" id="todo-1">
                        <label class="ms-2 form-check-label" for="todo-1">
                            Tâche à faire 2
                        </label>
                        <label class="ms-auto btn btn-danger btn-sm">
                        <i class="bi-trash">
                        </i>
                        </label>
                    </li>
                </ul>
            </main>
        `
    }
}
/**
 * 
 * @param {string} tagName 
 * @param {object} attributes 
 * @return {HTMLElement}
 */

// j'exporte la fonction qui sera utilisée dans mon app, et je dis que par défaut les attributs sont vides. 
export function createElement(tagName, attributes = {}) {
    const element = document.createElement(tagName)
    //J'utilise entries pour aller chercher les clefs et les valeurs de l'objet. C'est plus simple pour faire une itération. 
    for (const[attribute, value] of Object.entries(attributes)){
        //je crée ensuite l'élément dont j'ai besoin
        element.setAttribute(attribute, value)
    }
    //et je peux ainsi le renvoyer complété
    return element
}
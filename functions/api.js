
//Je crée ma fonction qui va me permettre de récupérer les infos de mon json
export async function fetchJSON (url, options = {}) {
    //Je viens modifier le header pour récupérer les options que l'on a déjà envoyé et on rajoute un header pour accepter le json
    const headers = {Accept: 'application/json', ... options.headers}
    // Je récupère la réponse via l'url, les options et les en-têtes
    const r = await fetch(url, {options, headers})
    // Si la réponse (r) est ok alors on la renvoie et on la parse sous forme de json
    if (r.ok) {
        return r.json()
    }
    // dans le cas contraire on renvoie une nouvelle erreur en rajoutant l'erreur originale en cause.
    throw new Error('Erreur serveur', {cause : r})
}
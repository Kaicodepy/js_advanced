import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = (element) =>{

    const renderHero = ( hero ) =>{
        element.innerHTML = hero.name;
    }

    const renderError = (error) =>{
        element.innerHTML =`<h3>${error}</h3>`;
    }

    let hero1, hero2;
    const id1 = '5d86371f25a058e5b1c8a65e';
    const id2 = '5d86371f1efebc31def272e2';
    // findHero(id1)
    // .then(hero => {
    //     hero1 = hero;
    //     return findHero(id2);
    // }).then(hero2 => {
    //     renderTwoheroes(hero1, hero2);
    // }).catch(renderError);


    Promise.all([findHero(id1),findHero(id2)])
    .then( ([hero1,hero2]) => renderTwoheroes(hero1,hero2) )
    .catch(renderError);

}

/**
 * 
 * @param {String} id 
 * @returns {Promise}
 */
const findHero = (id) =>{
    const promise = new Promise( (resolve,reject)=> {
        
        const hero = heroes.find(hero => hero.id === id);
        
        if( hero ){
            resolve(hero);
            return;
        }

        reject(`Hero with ${id} not found`);
    });

    // const hero = heroes.find(hero => hero.id === id);
    return promise;
}
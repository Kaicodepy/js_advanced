import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorAsyncComponent = async(element) =>{

    const heroGenerator = getHeroGenerator();

    do
    { element.innerHTML= (await heroGenerator.next().done)

    }while( !(await heroGenerator.next().done))

}

async function* getHeroGenerator(params) {
    

    for( const hero of heroes)
    {
     await sleep();
     yield hero.name;   
    }
}


const sleep = () =>{
    return new Promise((resolved) =>{
        setTimeout(() => {
          resolved();  
        }, 1000);
    })
}

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionComponent = (element) =>{

const myGenerator = myfirstGeneratorFunction();

}

function* idGenerator()
{
    let currentId = 0;
    while(true)
    {
       yield ++currentId; 
    }
}



function* myfirstGeneratorFunction(){

    yield 'Primer valor';

    return 'Ya no hay valores';

}
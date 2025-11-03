
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseRaceComponent = (element) =>{

    const renderValue = ( value ) =>{
        element.innerHTML = value;
    }

    Promise.race([ slowPromise(), mediumPromise(), fastPromise() ]).then( renderValue );

}

const slowPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('slowPromise');
    }, 2000);
});

const mediumPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('mediumPromise');
    }, 1500);
});

const fastPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Fast Promise');
    }, 1000);
});
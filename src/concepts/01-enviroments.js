
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const enviromentsComponent = (element) =>{

    const html=`Dev: ${import.meta.env.DEV} <br/>
    Prod: ${import.meta.env.PROD}`;
    
    element.innerHTML = html;
}
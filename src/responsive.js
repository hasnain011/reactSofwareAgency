import {css} from 'styled-components'
export const mobile = (props) =>{
    return css `
    @media only screen and (max-width: 425px){
        ${props}

    }
    
    `;
   
}
export const Tablet = (props) =>{
    return css `
    @media only screen and (max-width: 799px){
        ${props}

    }
    
    `;
   
}

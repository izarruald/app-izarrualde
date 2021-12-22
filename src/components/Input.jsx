import {useState, useEffect} from 'react'
// import './input.css'


export const Input = () => {

    const inputHandler = (event)=>{
        event.stopPropagation()/* buscar que hace */
        console.log(event.key);
        if ( ['a','e','i','o','u'].includes(event.key) ) {
                                 /* si estan incluidas en mi array cancelalo con preventDefault */
            event.preventDefault()
        }            
        
    }

    
    return (
        <div className="box" >
            <div className="border border-1 border-warning" >
                <input className="m-5" onKeyDown={inputHandler } type="text" name="i" id="i"/>
            </div>                     {/*evento = {funcion}  */}
        </div>
    )
}

//poner input en itemdetailcontainer 24'


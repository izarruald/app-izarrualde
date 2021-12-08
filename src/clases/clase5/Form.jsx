import Boton from './Boton';
import Button from './Boton';

function Form ( {title, children} ){
    //console.log(props);
    console.log('Form');
    console.log(children)
    return (
        <>
            <h2>{title}</h2>
            {Boton({buttonText: 'boton de form con prop'})}
            {/* <input type="text" placeholder='soy input'/><br /> */}
            {{/* {props.children} */}}
        </>
    )
}
export default Form
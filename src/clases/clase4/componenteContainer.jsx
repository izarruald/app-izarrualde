const estados = ['js' , 'React Js' , 'Component']


// COMPONENTE PRESENTACION
const Item = ( {valor} ) => {
    return (
        <button>{valor}</button>
    )
}

function ComponenteContainer() {


    return (
        <div>
            <Item valor = {'click'}/>
        </div>
    )
}

export default ComponenteContainer

/* import {memo} from 'react' */
import Item from './Item'
import logo from "../assets/img/logo-punto.png"
import Footer from './Footer'

const ItemList = ({listado}) =>{
    return (
        <div className='fondoInicio'>
            <div className='flex centrarCard paddingTTBB'>
                <img src={logo} width={'200px'} height={"200px"} alt="" /> 
            </div>
            <div className='listadoFlex boxmodCentrar '>
                {listado.map((producto) => <Item producto={producto} key ={producto.id}/>)}
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default ItemList
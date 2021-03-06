//DUPLICADO AFTER 23'
import { createContext, useState, useContext } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext (CartContext)


//nodo provedor
function CartContextProvider({children}) {/* captura todos los componentes */
    const [cartlist, setCartlist] = useState([])

    function borrarCarrito() {
        setCartlist([])/* deja el array vacio */
    }

    function eliminarItem(id){
        setCartlist(cartlist.filter(prods=>prods.id !== id))
    }//recibo el id del componente y con filter le digo que me traiga todo menos ese ID, guardo y seteo en el producto


    function agregarAlCarrito(item){
        const index = cartlist.findIndex (i => i.id ===item.id) //findidex me devuelve un -1 si es nuevo el item
        //en index guarda cartlist
        //y fijate si es nuevo o ya le tengo en mi lista
        //que comprueve en mi listado que ya tengo si el id que estoy ingresando con el id que ya tengo 

        if (index > -1){/* si es mayor que -1 es porque lo encontro y ya existe ese item */
            const oldQy = cartlist[index].contador

            cartlist.splice(index,1)
            setCartlist([...cartlist, {...item, contador: item.contador + oldQy}])
        } else {
            setCartlist([...cartlist,item])
        }
    }


    const calcularCantidad = () => {
        return cartlist.reduce((acc,item)=>acc + item.contador,0)
    }


    const calculateTotalPrice = () => {
        return Number(cartlist.reduce((acc, item) => acc + item.precio * item.contador, 0))	
        //acum que es donde se acumulan las cosas se inicializa en 0
    }








    return (
        <CartContext.Provider value={{
            cartlist,/* arriba el estado */
            agregarAlCarrito,/* abajo las funciones */
            borrarCarrito,
            eliminarItem,
            calcularCantidad,
            calculateTotalPrice
            }}>
            { children } {/* aca esta todo lo que envuelve, item itemlist detail */}
        </CartContext.Provider>
    )
}

export default CartContextProvider

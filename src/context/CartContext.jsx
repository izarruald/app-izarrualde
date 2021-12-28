import { createContext, useState } from "react";

export const CartContext = createContext([]);


//nodo provedor
function CartContextProvider({children}) {/* captura todos los componentes */
    const [cartlist, setCartlist] = useState([])

    console.log(cartlist)

    function agregarAlCarrito(item,contador) /* ¿QUE LE DICE CON ESTOS PARAMETROS? - dice que tome en cuenta item y contador */ {
        setCartlist([...cartlist,{item, contador}])//le dice que deje todo lo que tiene ese array + lo que le estas pasando, item y la cantidad que estan sumando
    } /* A item le agregas la cantidad de poductos que se puso en el contador */

    function borrarCarrito() {
        setCartlist([])/* deja el array vacio */
    }

    return (/* ¿QUE HACE TODO ESTO? */
        <CartContext.Provider value={{
            cartlist,/* arriba el estado */
            agregarAlCarrito,
            borrarCarrito/* abajo las funciones */
            }}>
            { children } {/* aca esta todo lo que envuelve, item itemlist detail */}
        </CartContext.Provider>
    )
}

export default CartContextProvider

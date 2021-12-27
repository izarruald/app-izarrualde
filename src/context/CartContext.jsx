import { createContext, useState } from "react";

export const CartContext = createContext([]);


//nodo provedor
function CartContextProvider({children}) {/* captura todos los componentes */
    const [cartlist, setCartlist] = useState([])

    function agregarAlCarrito(item) {
        setCartlist([...cartlist,item])//cambia el estado y se lo agrega al carrito es como pushear el producto y la cantidad que estan sumando
    }

    function borrarCarrito() {
        setCartlist([])
    }

    return (
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

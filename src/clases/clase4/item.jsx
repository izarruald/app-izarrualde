import { Input } from "./input"

const Item = () =>{
    return (
        <>
        <h2>hola soy un item</h2>
        {/* lo detecta con la autoimportacion */}
        <Input placeholderCustome = 'soy de item'/>
        </>
    )
}

export default Item

// 1:40 QUEDE (copiar ejemplo?)
//DESTRUCTURIN ES ESTO
//creo una const llamada titulo que me trae como parametro las props de titulo-subtitulo-saludos
const Titulo = ( {titulo,subtitulo,saludo} ) => {
    

    return(<>
        {/* onclick saludo(tira su mensaje por consola) */}
        {/* titulo y subtitulo tiran su mensaje dentro del h2 */}
        <h2 onClick={()=>saludo()}>{titulo}</h2>
        <h2 onClick={()=>saludo()}>{subtitulo}</h2>
        </>
    )
}
export default Titulo
import prato from '../components/NavBar/1939.png'
import nueces from '../assets/img/nueces.jpg'
const productos =[
    {id:1, nombre:'Nueces',  precio: 180 , foto: nueces},
]//datos de la base de datos


export const getFetch2 = new Promise ((resolve)=>{
    //acciones pueden ser o no asincronicas setTime
    setTimeout(()=>{
        resolve(productos)
    },2000)
}) //instanciar un objeto
import prato from '../components/NavBar/1939.png'
import nueces from '../assets/img/nueces.jpg'
import almendras from '../assets/img/almendras.jpeg'
import castanas from '../assets/img/castanas.jpg'
import mani from '../assets/img/mani.jpg'
import mix from '../assets/img/mix.jpg'
import aritos from '../assets/img/aritos.jpg'
const productos =[
    {id:1, nombre:'Nueces',  precio: 180 , foto: nueces , categoria: "frutos secos"},
    {id:2, nombre:'Almendras', precio: 162 , foto: almendras , categoria: "frutos secos"},
    {id:3, nombre:'Castañas', precio: 158 , foto: castanas , categoria: "frutos secos"},
    {id:4, nombre:'Mani', precio: 25 , foto: mani , categoria: "frutos secos"},
    {id:5, nombre:'Mix de frutos secos', precio: 163 , foto: mix , categoria: "frutos secos"},
    {id:6, nombre:'Aritos de colores', precio: 37 , foto: aritos , categoria: "cereales"}
]//datos de la base de datos


export const getFetch = new Promise ((resolve)=>{
    //acciones pueden ser o no asincronicas setTime
    setTimeout(()=>{
        resolve(productos)
    },2000)
}) //instanciar un objeto
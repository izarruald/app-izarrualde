import prato from '../components/NavBar/1939.png'
const productos =[
    {id:1, nombre:'Nueces',  precio: 180 , foto:prato , categoria: "remeras"},
    {id:2, nombre:'Almendras', precio: 162 , foto:prato , categoria: "remeras"},
    {id:3, nombre:'Castañas', precio: 158 , foto:prato , categoria: "remeras"},
    {id:4, nombre:'Mani', precio: 25 , foto:prato , categoria: "gorras"},
    {id:5, nombre:'Mix de frutos secos', precio: 163 , foto:prato , categoria: "gorras"},
    {id:6, nombre:'Aritos de colores', precio: 37 , foto:prato , categoria: "gorras"}
]//datos de la base de datos


export const getFetch = new Promise ((resolve)=>{
    //acciones pueden ser o no asincronicas setTime
    setTimeout(()=>{
        resolve(productos)
    },2000)
}) //instanciar un objeto
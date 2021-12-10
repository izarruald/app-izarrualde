const productos =[
    {id:1, nombre:'nueces',  precio: 180 },
    {id:2, nombre:'almendras', precio: 162},
    {id:3, nombre:'castañas', precio: 158},
    {id:4, nombre:'mani', precio: 25},
    {id:5, nombre:'Mix de frutos secos', precio: 163}
]//datos de la base de datos


export const getFetch = new Promise ((resolve)=>{
    //acciones pueden ser o no asincronicas setTime
    setTimeout(()=>{
        resolve(productos)
    },2000)
}) //instanciar un objeto
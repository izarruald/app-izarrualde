import React from 'react'
import { Input } from '../components/Input'
import ItemDetailContainer from '../components/ItemDetailContainer'
import ItemListContainer from '../components/ItemListContainer'

function Home() {
    return (
        <>
            <ItemListContainer/>
            <ItemDetailContainer/>   
            <Input/>
        </>
    )
}

export default Home

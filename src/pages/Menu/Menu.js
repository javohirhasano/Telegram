import React from 'react'
import { useParams } from 'react-router-dom'
import Home from '../Home'
import Container from '../../containers'
import Elbek from '../Elbek'

const Menu = () => {
    const { menu } = useParams()
    return (
        <Container>
            {menu === "home" && <Home></Home>}
            {menu === "about" && <Elbek></Elbek>}
        </Container>


    )
}
export default Menu
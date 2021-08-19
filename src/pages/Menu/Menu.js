import React from 'react'
import { useParams } from 'react-router-dom'
import Home from '../Home'
import Container from '../../containers'

const Menu = () => {
    const { menu } = useParams()
    return (
        <Container>
            {menu === "home" && <Home></Home>}
        </Container>


    )
}
export default Menu
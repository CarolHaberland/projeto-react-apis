import React from 'react'
import { typeHandler } from "../../utils"
import { Container } from '@mui/material'

export const PokeCard2 = ({name,image, id, types }) => {



  return (
    
    <Container className="pokeCard2">
        <div className='cardContent'>
            <div variant="h5">
                #{id}
            </div>
            <div variant="h4">
                {name}
            </div>
            <div variant="h6">
                {typeHandler(types)}
            </div>
        </div>
        <div className='pokeImg' component="img" image={image} >

        </div>
    </Container>


  )
}

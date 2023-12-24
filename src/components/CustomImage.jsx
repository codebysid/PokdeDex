import Image from 'next/image'
import React from 'react'

const CustomImage = ({ imageUrl }) => {
    return (
        <Image src={imageUrl}
            sizes='100vw'
            alt='PokeBall'
            className='object-contain' fill />
    )
}

export default CustomImage

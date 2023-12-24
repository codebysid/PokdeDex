import React from 'react'
import CustomImage from './CustomImage'

const PokemonCard = ({ name, imageUrl, type1, type2, id, uid }) => {
    return (
        <div className={`defaultCardStyle ${type1} w-full p-8 pb-12 flex flex-row justify-between items-center capitalize rounded-2xl text-white relative shadow-xl cursor-pointer`}>
            <div className='absolute right-0 bottom-0 h-32 w-32 mix-blend-overlay'>
                <CustomImage imageUrl="/pokeball.png" />
            </div>
            <span className=' absolute right-3 top-3 text-3xl  font-semibold text-slate-200 mix-blend-overlay'>{id}</span>
            <div className='flex flex-col gap-3 font-extrabold'>
                <h1 className='  text-2xl'>{name}</h1>
                <div className='flex flex-col gap-2 text-sm'>
                    <span className='type w-fit'>{type1}</span>
                    {
                        type2 && <span className='type w-fit'>{type2}</span>
                    }
                </div>
            </div>
            <div className='relative h-32 w-32'>
                <CustomImage imageUrl={imageUrl} />
            </div>

        </div>
    )
}

export default PokemonCard

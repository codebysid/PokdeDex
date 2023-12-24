"use client"
import React, { useEffect, useLayoutEffect, useState } from 'react'
import PokemonCard from './PokemonCard'
import { fetchPokemon, getPokemonById, readStore } from '@/app/actions'
import Spinner from './Spinner'
import SearchBar from './SearchBar'
import StatsModal from './StatsModal'
import { debounce } from '@/utils/services'
import DropDownFilter from './DropDownFilter'

let dropDownFilterOptions = []

const DisplayPokemon = ({ data }) => {
    const [pokemonData, setPokemonData] = useState(data)
    const [pageNumber, setPageNumber] = useState(6)
    const [loading, setLoading] = useState(false)
    const [searchQuery, setSearchQuery] = useState("")
    const [openModal, setOpenModal] = useState(false)
    const [modalStats, setModalStats] = useState([])
    const [selectedOption, setSelectedOption] = useState("")

    const handleModal = async (pokemonId) => {
        const pokemonByIdData = await getPokemonById(pokemonId)
        window.scrollTo(0, 0)
        setModalStats(pokemonByIdData)
        setOpenModal(prev => !prev)
    }

    const handleScroll = async () => {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.scrollHeight) {
            console.log("fill scroll")
            setLoading(true)
            try {
                await fetchPokemon(pageNumber)
                const { pokemon, infiniteScrolling } = await readStore()
                setPokemonData(pokemon)
                setPageNumber(infiniteScrolling)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }

        }
    }
    const debouncedHandleScroll = debounce(handleScroll, 300);

    useEffect(() => {
        window.addEventListener("scroll", debouncedHandleScroll)
        return () => window.removeEventListener("scroll", debouncedHandleScroll)
    }, [debouncedHandleScroll, pokemonData, pageNumber, loading])

    return (
        <div className='relative flex flex-col items-center w-[95vw] lg:w-[95%]'>
            <div className='absolute z-30 w-full'>
                {
                    openModal && <StatsModal setModal={setOpenModal} modalStats={modalStats} />
                }
            </div>
            <div className='absolute flex flex-col items-center gap-4 z-10 lg:flex-row lg:flex-wrap lg:w-[99%]'>

                <div className=' flex flex-row gap-2 lg:w-[90%]'>
                    <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                    <DropDownFilter dropDownFilterOptions={dropDownFilterOptions} setSelectedOption={setSelectedOption} />
                </div>
                {
                    pokemonData.filter(pokemon => {
                        if (selectedOption && selectedOption !== "all") {
                            return pokemon.types[0].type.name.toLowerCase() === selectedOption.toLowerCase()
                        }
                        return pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
                    }).map(pokemon => {
                        let id = parseInt(pokemon.id)
                        if (id < 10) id = `#00${id}`
                        else if (id >= 10 && id < 100) id = `#0${id}`
                        dropDownFilterOptions.push(pokemon.types[0].type.name)

                        return <div key={pokemon.id} onClick={() => handleModal(pokemon.id)} className=' w-full lg:w-96'>

                            <PokemonCard uid={pokemon.id} id={id} name={pokemon.name} imageUrl={pokemon.image} type1={pokemon.types[0].type.name} type2={pokemon.types[1] ? pokemon.types[1].type.name : null} />
                        </div>
                    })
                }
                <div className='flex justify-center w-full'>
                    {
                        loading && <Spinner />
                    }
                </div>
            </div>
        </div>
    )
}

export default DisplayPokemon

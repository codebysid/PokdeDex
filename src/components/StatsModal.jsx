"use client"
import React from 'react'
import CustomImage from './CustomImage'

const StatsModal = ({ setModal, modalStats }) => {
    return (
        <div className=' type w-full h-[100vh] flex flex-col gap-4 justify-center items-center text-xl'>
            <div className='relative h-52 w-52'>
                <CustomImage imageUrl={modalStats.image} />
            </div>
            <table className=' border-collapse w-fit'>
                <tbody>
                    {
                        modalStats.stats.map((curStat, key) => {
                            return <tr key={key}>
                                <td className='flex flex-row gap-2'>
                                    <p className=' capitalize'>{curStat.stat.name}</p>
                                </td>
                                <td>

                                    <p>{curStat.base_stat}</p>
                                </td>
                                <td>
                                    <meter min={0} max={200} value={curStat.base_stat} />
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
            <button className=' px-5 py-1 bg-red-500 rounded-xl text-white' onClick={() => setModal(prev => !prev)}>close</button>
        </div>
    )
}

export default StatsModal

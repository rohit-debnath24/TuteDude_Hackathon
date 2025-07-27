import React, { useContext, useMemo } from 'react'
import Items from '../Components/Items'
import data from '../DataBase/Items.json'


const HomeItemsList = () => {
    
    return (
        <>
            <div className='w-full flex justify-center'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 w-11/12'>
                    {data.map(item => (
                        <Items
                            key={item.id}
                            Name={item.name}
                            Price={item.price}
                            Vendor={item.vendor}
                            Amount={item.amount}
                            DTime={item.dTime}
                            Image={item.image}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default HomeItemsList
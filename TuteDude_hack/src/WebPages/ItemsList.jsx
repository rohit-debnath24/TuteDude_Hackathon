import React from 'react'
import Items from '../Components/Items'
import data from '../DataBase/Items.json'

const ItemsList = () => {
    return (
        <>
            <div className='grid grid-cols-12 gap-8'>
                <div className='col-span-1 '></div>
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

                <div className='col-span-1 '></div>

            </div>
        </>
    )
}

export default ItemsList
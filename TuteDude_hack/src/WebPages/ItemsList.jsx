import React from 'react'
import Items from '../Components/Items'

const ItemsPage = () => {
    return (
        <>
            <div className='grid grid-cols-12 gap-8'>
                <div className='col-span-1 '></div>
                {data.map(item => (
                    <Items
                        key={item.id}
                        name={item.name}
                        price={item.price}
                        vendor={item.vendor}
                        amount={item.amount}
                        dTime={item.dTime}
                        image={item.image}
                    />
                ))}

                <div className='col-span-1 '></div>

            </div>
        </>
    )
}

export default ItemsPage
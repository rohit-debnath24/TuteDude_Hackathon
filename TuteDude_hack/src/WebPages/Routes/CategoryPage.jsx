import React from 'react'
import ItemsListPage from '../ItemsListPage'

const CategoryPage = () => {
    return (
        <div className='grid grid-cols-16 h-auto '>
            <div className='col-span-1'></div>
            <div className='col-span-2 bg-amber-100 grid  gap-4 overflow-y-auto h-[500px]'>
                <div className='row-span-3 bg-amber-100'>1</div>
                <div className='row-span-3 bg-amber-100'>2</div>
                <div className='row-span-3 bg-amber-100'>3</div>
                <div className='row-span-3 bg-amber-100'>4</div>
                <div className='row-span-3 bg-amber-100'>5</div>
                <div className='row-span-3 bg-amber-100'>6</div>
                <div className='row-span-3 bg-amber-100'>7</div>
                <div className='row-span-3 bg-amber-100'>8</div>
                <div className='row-span-3 bg-amber-100'>9</div>
                <div className='row-span-3 bg-amber-100'>10</div>
                <div className='row-span-3 bg-amber-100'>11</div>
                <div className='row-span-3 bg-amber-100 pb-8'>12</div>

            </div>
            <div className='col-span-12 bg-amber-700  gap-4 overflow-y-auto h-[500px]'>
                
            </div>
            <div className='col-span-1 '></div>

        </div>
    )
}

export default CategoryPage
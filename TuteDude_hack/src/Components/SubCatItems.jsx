import React, { useContext, useMemo } from 'react'


import Items from '../Components/Items'
import data from '../DataBase/SubItem.json'
import { SearchContext } from '../Utilities/SearchContext';

const SubCatItems = () => {
    const { search } = useContext(SearchContext);
    // Filter items by search (case-insensitive, matches any part of name)
    const filteredData = useMemo(() => {
        if (!search) return data;
        return data.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }, [search]);
    return (
        <>
            <div className='grid grid-cols-6 gap-4 mt-5 ml-5 mr-5'>
                {filteredData.map(item => (
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
        </>
    )
}

{/* <div className='col-span-1  h-80'><Items
    Name="TOMATOES"
    Price= "₹25/kg"
    Amount= "1kg"
    vendor= "FreshFarm"
    DTime= "10mins"
    Image= " https://cdn.zeptonow.com/production/tr:w-1280,ar-1200-1200,pr-true,f-auto,q-80/cms/product_variant/d4b8ef20-df5e-4d0b-ab04-36de62dd0f45.jpeg"



/></div>
<div className='col-span-1 bg-blue-200 h-20'>SubCat Item 2</div>
<div className='col-span-1 bg-blue-300 h-20'>SubCat Item 3</div>
<div className='col-span-1 bg-blue-400 h-20'>SubCat Item 4</div>
<div className='col-span-1 bg-blue-500 h-20'>SubCat Item 5</div>
<div className='col-span-1 bg-blue-600 h-20'>SubCat Item 6</div> */}
export default SubCatItems
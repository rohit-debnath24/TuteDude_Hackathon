import React, { useContext, useMemo, useState } from 'react'
import Items from '../Components/Items'
import data from '../DataBase/Items.json'
import { SearchContext } from '../Utilities/SearchContext';

const ITEMS_PER_PAGE = 8;
const ItemsList = () => {
    const { search } = useContext(SearchContext);
    const [page, setPage] = useState(1);
    const filteredData = useMemo(() => {
        let result = !search ? data : data.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
        // Deduplicate by id
        const seen = new Set();
        return result.filter(item => {
            if (seen.has(item.id)) return false;
            seen.add(item.id);
            return true;
        });
    }, [search]);

    // Pagination logic
    const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
    const paginatedData = filteredData.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

    // Reset to page 1 if search changes
    React.useEffect(() => { setPage(1); }, [search]);

    return (
        <>
            <div className='grid grid-cols-12 gap-8'>
                <div className='col-span-1 '></div>
                {paginatedData.map(item => (
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
            {/* Pagination Controls */}
            <div className="flex justify-center items-center mt-6 gap-4">
                <button
                    className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
                    onClick={() => setPage(p => Math.max(1, p - 1))}
                    disabled={page === 1}
                >Prev</button>
                <span>Page {page} of {totalPages}</span>
                <button
                    className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
                    onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                >Next</button>
            </div>
        </>
    )
}

export default ItemsList
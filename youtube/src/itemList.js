import React from 'react'
import LineItem from './LineItem'


const ItemList = ({items,handlecheck,Deleteitem}) => {
    return (
        <ul className='box'>
            {items.map((item) => (
                <LineItem
                    item={item}
                    key={item.id}
                    handlecheck={handlecheck}
                    Deleteitem={Deleteitem}
                />
            ))}
        </ul>
    )
}

export default ItemList


import React from 'react';
import ItemList from './itemList';

const Todolist = ({ items, handlecheck, Deleteitem }) => {
    return (
        <main>
            {items.length ? (
                <ItemList
                    items={items}
                    handlecheck={handlecheck}
                    Deleteitem={Deleteitem}
                />
            ) : (
                <p style={{ marginBottom: '300px' }}><h1>Your list is Empty</h1></p>
            )}
        </main>
    )
}

export default Todolist;

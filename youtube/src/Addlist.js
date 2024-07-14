import React from 'react'
import { FaPlus } from 'react-icons/fa'

const Addlist = ({newState, setnewState, handlesubmit})=> {
  return (
    <form className='add' onSubmit={(e) => handlesubmit(e)}> 
        <label htmlFor="additem" className='addi'> Add Item</label>
        <input
              type='text'
              autoFocus
              placeholder='Add Item'
              required
              value={newState}
              onChange={(e) => setnewState(e.target.value)}
        />
        <button className='adbut' type='sumbit'  aria-label='Add item'><FaPlus /> </button>  
          
    </form>
  )
}

export default Addlist
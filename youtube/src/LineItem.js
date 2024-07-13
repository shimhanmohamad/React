import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'

const LineItem = ({item, handlecheck, Deleteitem}) => {
  return (
      <li className='item'>
          <input type='checkbox' onChange={() => handlecheck(item.id)} checked={item.checked} />
          <label onDoubleClick={() => handlecheck(item.id)}
              style={(item.checked) ? { textDecoration: 'line-through' } : null}
          > {item.item}</label>
          <FaTrashAlt
              className='del'
              role="button"
              tabIndex="0"
              onClick={() => Deleteitem(item.id)}
          />
      </li>
  )
}

export default LineItem
import React from 'react'
import './addColour.css'
import colorNames from 'colornames'

const AddColour = ({bigincolour,setColour,setHex,biginDark,setDark})=> {
    return (
      <form onSubmit={(e) => e.preventDefault()}> 
            <input type='text' required placeholder='Add Colour'
                value={bigincolour}
                onChange={(e) => {
                    setColour(e.target.value);
                    setHex(colorNames(e.target.value));
                }
                }
            /><br />
            <button type='button'
               onClick={() => setDark(!biginDark)}
            > Toggle text Colour</button>
      </form>
      
       
    
  )
}

export default AddColour
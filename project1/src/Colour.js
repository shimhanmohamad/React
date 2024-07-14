import React from 'react'


const Colour = ({biginColour,biginHex,biginDark}) => {
  return (
      <div className='box'
          style={{
              backgroundColor: biginColour,
              color:biginDark ? "#000" : "#FFF"
        }}
      >
          <p>{biginColour ? biginColour : "Empty Value"}</p>
          <p>{ biginHex ? biginHex : null}</p>
      </div>
  )
}

Colour.defaultProps = {
    biginColour : "Empty Colour Value"
}

export default Colour
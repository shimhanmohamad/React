import React from 'react'

const Header = (props) => {     // we can write {title} =(props)    title is a parameter this is from js destructuring
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    )
}

Header.defaultProps = {     // when data is not passing to title then this default data is print in the header
    title : "To do List" 
}

export default Header
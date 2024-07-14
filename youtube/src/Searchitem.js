import React from 'react'

const Searchitem = ({search,setSearch}) => {

  return (
      <form className='search' onSubmit={(e) => e.preventDefault()}>
          <input type='text' id='search' role='searchbox'
              placeholder='SearchItem' value={search}
              onChange={(e) => setSearch(e.target.value)}
          />
      </form>
  )
}

export default Searchitem
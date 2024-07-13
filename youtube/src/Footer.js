import React from 'react'

const Footer = ({length}) => {
  // const year = new Date()
  return (
      <footer>
      {/* Copyright &copy; {year.getFullYear()} */}
      <h1>{length} List { length ===1 ? "item" : "items"}</h1>
    </footer>
  )
}

export default Footer
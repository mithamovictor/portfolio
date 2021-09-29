import React from 'react'

const Footer = () => {
  let year = new Date().getFullYear()
  return (
    <footer>
      <p>Copyright &copy; {year}. All rights reserved.</p>
    </footer>
  )
}

export default Footer
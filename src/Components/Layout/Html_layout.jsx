import React from 'react'
import { Nav_bar } from '../Navbar/Nav_bar'
import { Footer } from '../Footer/Footer'
import { Html } from '../Content/Html'
import { Html_side_bar } from '../Side_bar/Html_side_bar'

export const Html_layout = () => {
  return (
    <div>
      <Nav_bar />
      <div className='flex'>
        <Html_side_bar />
        <Html />
      </div>
      <Footer />
    </div>
  )
}

import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import FooterComponent from '../components/FooterComponent'

const Layout = ({children}) => {
    
  return (
    <>
      <HeaderComponent/>
      <div style={{minHeight:'75vh'}}>
        {children}
      </div>
      <FooterComponent/>
    </>
  )
}

export default Layout

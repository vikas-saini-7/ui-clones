import React from 'react'
import HomePage from '../pages/HomePage'
import Header from '../components/Header'
import Footer from '../components/Footer'

const MainRouter = () => {
  return (
    <div>
      <Header/>
      <main className='pt-14'>
        <HomePage/>
      </main>
      {/* <Footer/> */}
    </div>
  )
}

export default MainRouter
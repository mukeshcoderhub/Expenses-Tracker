import React, { useContext } from 'react'
import Expenses from '../components/Expenses'
import Summary from '../components/Summary'
import Recent from '../components/Recent'

const Home = () => {
  return (
    <div className='w-screen h-auto bg-amber-50 p-2'>
        <Expenses />
        <Summary />
        <Recent />
    </div>
  )
}


export default Home
import { MyContext } from '@/Helper/Context'
import React, { useContext } from 'react'

const NavBar = () => {
    const user = useContext(MyContext)
  return (
    <div className='text-4xl text-green-500'>This is NavBar Components --- {user}</div>
  )
}

export default NavBar
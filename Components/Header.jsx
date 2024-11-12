import { MyContext } from '@/Helper/Context'
import React, { useContext } from 'react'

const Header = () => {
  const user = useContext(MyContext)
  return (
    <div className='text-4xl text-orange-500'>This is Header Components --- {user}</div>
  )
}

export default Header
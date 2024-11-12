import { MyContext } from '@/Helper/Context'
import React, { useContext } from 'react'

const Footer = () => {
  const user = useContext(MyContext)
  return (
    <div className='text-4xl text-purple-500'>This is Footer Components --- {user}</div>
  )
}

export default Footer
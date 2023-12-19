import React from 'react'
import { useSelector } from 'react-redux'

const DispayArea = () => {
  const counterValue = useSelector(store => store.counter)
  return (
    <div className='m-5 text-center'>Current value of counter : {counterValue}</div>
  )
}

export default DispayArea
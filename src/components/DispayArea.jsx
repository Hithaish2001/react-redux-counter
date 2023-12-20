import React from 'react'
import { useSelector } from 'react-redux'

const DispayArea = () => {
  const { counterVal } = useSelector(store => store.counter)
  const { privacyVal } = useSelector(store => store.privacy)
  return (<>
       {/* <div className='m-5 text-center'>Current value of counter : {counterVal}</div> */}
    {privacyVal ? <div className='m-5 text-center'>Current value of counter : {counterVal}</div> : <div className='m-5 text-center'>Privacy mode: ON</div>}
    </>
  )
}

export default DispayArea
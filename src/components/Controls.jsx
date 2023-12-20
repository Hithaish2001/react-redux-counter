import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { CounterAction } from '../store/counterSliceStore'
import { PrivacyAction } from '../store/privacySliceStore'

const Controls = () => {

  const dispatch = useDispatch()
  const inputValue = useRef()


  const handleIncr=()=>{
    dispatch(CounterAction.increment())
  }

  const handleDecr=()=>{
    dispatch(CounterAction.decrement())
  }

  const handlePrivacy=()=>{
    dispatch(PrivacyAction.toggle())
  }

  const handleDecrByValue=()=>{
    dispatch(CounterAction.subtraction({num: inputValue.current.value}))
    inputValue.current.value = ""
  }

  const handleIncrByValue=()=>{
    dispatch(CounterAction.addition({num: inputValue.current.value}))
    inputValue.current.value = ""
  }



  return (
    <>
      <div className='space-x-5 flex justify-center'>
          <button className='border border-black px-4 py-1 rounded' onClick={handleIncr}>Incr</button>
          <button className='border border-black px-4 py-1 rounded' onClick={handleDecr}>Decr</button>
          <button className='border border-black px-4 py-1 rounded' onClick={handlePrivacy}>Privacy</button>
      </div>

      <div className='space-x-5 m-5'>
          <input type="text" ref={inputValue} className='border-2 border-black rounded h-10 p-2' />
          <button className='border border-black px-4 py-1 rounded' onClick={handleIncrByValue}>ADD</button>
          <button className='border border-black px-4 py-1 rounded' onClick={handleDecrByValue}>SUB</button>
      </div>
    </>
  )
}

export default Controls
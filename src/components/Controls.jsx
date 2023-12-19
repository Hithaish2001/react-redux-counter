import { useRef } from 'react'
import { useDispatch } from 'react-redux'

const Controls = () => {

  const dispatch = useDispatch()
  const inputValue = useRef()


  const handleIncr=()=>{
    dispatch({type: "INCREMENT"})
  }
  const handleDecr=()=>{
    dispatch({type: "DECREMENT"})
  }
  const handleDecrByValue=()=>{
    dispatch({type: "DECREMENTBYVALUE", payload: {num: inputValue.current.value}})
    inputValue.current.value = ""
  }
  const handleIncrByValue=()=>{
    dispatch({type: "INCREMENTBYVALUE", payload: {num: inputValue.current.value}})
    inputValue.current.value = ""
  }
  return (
    <>
      <div className='space-x-5 flex justify-center'>
          <button className='border-2 px-4 py-1 rounded' onClick={handleIncr}>Incr</button>
          <button className='border-2 px-4 py-1 rounded' onClick={handleDecr}>Decr</button>
      </div>

      <div className='space-x-5 m-5'>
          <input type="text" ref={inputValue} className='border-2 border-black rounded h-10 p-2' />
          <button className='border-2 px-4 py-1 rounded' onClick={handleIncrByValue}>ADD</button>
          <button className='border-2 px-4 py-1 rounded' onClick={handleDecrByValue}>SUB</button>
      </div>
    </>
  )
}

export default Controls
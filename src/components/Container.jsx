
const Container = ({children}) => {
  return (
    <div className='bg-gray-100 p-10 flex justify-center items-center rounded-md border drop-shadow-2xl'>
      <div className=''>{children}</div>
    </div>
  )
}

export default Container
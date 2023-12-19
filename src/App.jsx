import Header from "./components/header"
import DisplayArea from "./components/DispayArea"
import Container from "./components/Container"
import Controls from "./components/Controls"

function App() {

  return (
    <>
      <div className='bg-gray-400 w-screen h-screen flex flex-col justify-center items-center'>
      <Container>
        <Header />
        <DisplayArea />
        <Controls />
      </Container>
      </div>
    </>
  )
}

export default App

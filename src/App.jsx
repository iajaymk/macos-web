import './App.css'
import Desktop from './components/Desktop/Desktop'

function App() {

  return (
    <>
      <div
        className="h-screen w-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/src/assets/wallpapers/Sequoia-Light.jpg')" }}
      >
        <Desktop />
      </div>
    </>
  )
}

export default App

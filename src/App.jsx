import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills"

const App = () => {
  return (
    <div className="bg-[#1A1B21] w-full h-auto font-Space">
      <div className="w-[1100px] mx-auto h-full ">
        <Navbar />
        <Home />
        <Skills />
      </div>
          </div>
  )
}

export default App

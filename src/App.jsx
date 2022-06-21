import { useState } from 'react'
import './App.css'
import RoutesConfig from "./routes";
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <RoutesConfig />
      <Footer />
    </div>
  )
}

export default App

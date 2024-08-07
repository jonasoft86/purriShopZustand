import { Route, Routes } from 'react-router-dom'
import  Header  from "./components/Header/Header"
import  Home  from "./pages/Home"
import './App.css'
import Cart from './pages/Cart'
import Detail from './pages/Detail'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<Detail />} />
      </Routes>
    </>
  )
}

export default App

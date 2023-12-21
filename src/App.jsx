import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Catalogo, { AppContext } from './components/Catalogo'
import ProductoItem from './components/ListaCatalogo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <AppContext>
      <div>
        <Header/>

        <main>
      <ProductoItem />
      </main>

      </div>
    </AppContext>
  )
}

export default App

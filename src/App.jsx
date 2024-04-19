import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Button } from "@nextui-org/button";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main'>
      <div className='side'>
        <p className="title__side">FindTrack</p>
      </div>

      <section className='principal'>

        <section className='top'>
          <div className="favorite"></div>
          <div className="favorite"></div>
          <div className="favorite"></div>
          <div className="favorite favorite-selected"></div>
        </section>

        <section className='center'>
          <section className='feeds'>
            <div></div>
            <div></div>
          </section>
          <div className='list'></div>
        </section>

      </section>

    </div>
  )
}

export default App

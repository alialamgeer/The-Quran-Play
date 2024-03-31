import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Quran from "./components/Quran"

function App() {
  const [count, setCount] = useState(0)

  return (

    <div id='bc'>
      <h4>بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</h4>
      <h1>The Quran Play</h1>
      <p>In this site you will get specific quranic verses in different qari's voice.</p>
      <Quran/>
    </div>
  )
}

export default App

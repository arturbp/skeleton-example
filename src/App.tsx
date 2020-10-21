import React from 'react'
import './App.css'

import { Skeleton } from './components/Skeleton'

function App() {
  return (
    <div className="App">
      <Skeleton circle style={{ marginBottom: 10 }} />
      <Skeleton style={{ marginBottom: 10 }} />
      <Skeleton style={{ marginBottom: 10 }} />
      <Skeleton />
    </div>
  )
}

export default App;

import React from 'react'
import './App.css';

const App = () => {
  const arr = [
    {
      id: 1,
      name: 'a'
    },
    {
      id: 2,
      name: 'b'
    }
  ]



  return (
    <div className='App'>
      {arr.map((a) => (
        <div key={a.id}>{a.name}</div>
      ))}
    </div>
  )
}

export default App

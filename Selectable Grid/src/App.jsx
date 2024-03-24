import React from 'react'
import SelectableGrid from './components/SelectableGrid'
import "./App.css";

const App = () => {
  return (
    <div>
        <h1>Selectable Grid</h1>
        <SelectableGrid rows={10} cols={10}/>
    </div>
  )
}

export default App
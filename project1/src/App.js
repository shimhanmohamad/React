import './App.css';
import Colour from './Colour';
import AddColour from './AddColour';
import { useState } from 'react';
function App() {

  const [biginColour, setColour] = useState('')
  const [biginHex, setHex] = useState('')
  const [biginDark,setDark] = useState(true)

  return (
    <div className="App">
      <Colour
        biginColour={biginColour}
        biginHex={biginHex}
        biginDark={biginDark}
      />
      <AddColour
        bigincolour = {biginColour}
        setColour = {setColour}

        setHex = {setHex}
        biginDark = {biginDark}
        setDark = {setDark}
      />
    </div>
  );
}

export default App;

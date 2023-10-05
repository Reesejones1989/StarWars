import './App.css';
import React, { useState, useEffect} from 'react'
import Navbar from './components/Navbar';
import Starships from './components/Starships';
const swapi = require('./services/sw-api')

function App() {
  // const [user, setUser] = useState([])
  const [ships, setShips] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchShips(){
    var res = await fetch('https://swapi.dev/api/starships/?format=json')
    var data = await res.json();
    setShips(data.results)
    }
    
    fetchShips();
    // setLoading(false)

  }, [])
// console.log("data", ships)
  
  
  return (
    <main className="App">
  
    <div>
      {/* <StarShip/> */}
      <Navbar />
      <Starships data= {ships}/>
     </div>

  
      
    </main>



  );
    }

export default App;

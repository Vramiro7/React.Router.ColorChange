import {Routes, Route, Link} from 'react-router-dom'
import Red from './components/Red'
import Blue from './components/Blue'
import Home from './components/Home'
// import './index.css'

const App =() => {
  

  return (
    <div id="container">
      
      <div id="navbar">
        <Link to='/blue'> {<h1>Blue</h1>} </Link>
        <Link to='/red'> {<h1>Red</h1>} </Link>
        <Link to='/'> {<h1>HOME</h1>} </Link>
        
      </div>
      <div id="main-section">
        <Routes>

          <Route path='/blue' element={<Blue />} />  
          <Route path='/red' element={<Red />} /> 
          <Route path='/' element={<Home />} /> 
          
        </Routes>
      </div>

    </div>
  )
}

export default App

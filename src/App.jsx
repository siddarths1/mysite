import './App.css'
// index.js or App.js (root level)
import '@fortawesome/fontawesome-free/css/all.min.css';

import Navbar from './Navbar'
import Home from './Home'
import Work from './Work'
import Contact from './Contact';


function App() {

  return (
    
    <div>
     <Navbar/>
     <Home/>
     <Work/>
     <Contact/>
    </div>
    
  )
}

export default App

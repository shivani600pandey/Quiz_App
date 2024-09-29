import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './Home'
import Quiz from './Quiz'
import Question from './Question'

function App() {
 

  return (
    <>
     <Router>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/quiz' element={<Quiz/>}/>
    <Route path='/que' element={<Question/>}/>

  </Routes>
</Router>

    </>
  )
}

export default App

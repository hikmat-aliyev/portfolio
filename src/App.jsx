import './App.css'
import Intro from './Intro/Intro'
import About from './About/About'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'

function App() {

  return (
    <div className='app-container'>
      <div> <Intro /> </div>
      <div> <About /> </div>
      <div> <Skills /> </div>
      <div> <Projects /> </div>
      <div><Contact/></div>
    </div>
  )
}

export default App

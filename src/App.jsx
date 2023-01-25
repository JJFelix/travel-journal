import './index.css'
import Navbar from './components/Navbar'
import MainCard from './components/MainCard'
import data from './data'


function App() {

  const travels = data.map(item => {
    return (
      <MainCard 
        key = {item.id}
        item = {item}
      />
    )      
  })

  return (
    <div className="App">
      <Navbar />
      
      {travels}

      <footer>
        <small>TechFlixHub&copy; 2023</small>
        <small><i class="fa-solid fa-envelope"></i> techflixhub@gmail.com</small>
      </footer>
      
    </div>
  )
}

export default App

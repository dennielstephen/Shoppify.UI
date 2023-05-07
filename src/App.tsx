import './App.css'
import Footer from './components/common/Footer'
import CheatSheet from './pages/cheatsheet'
import Dashboard from './pages/dashboard'

function App() {
    return (
        <div>
          <div>
            <CheatSheet></CheatSheet>
          </div>
          <Footer/>
        </div>
    )
}

export default App

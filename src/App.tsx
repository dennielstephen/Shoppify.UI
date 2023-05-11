import './App.css'
import Footer from './components/common/Footer'
import Navbar from './components/common/Navbar'
import CheatSheet from './pages/cheatsheet'
import Dashboard from './pages/dashboard'
import ResponsiveAppBar from './components/common/ResponsiveAppBar'
import ReduxToolkitDemo from './pages/reduxToolkitDemo'
// import Slider from './components/common/Slider'

function App() {
    return (
        <div className='flex flex-col h-screen justify-between bg-white'>
            <Navbar/>
            {/* <ResponsiveAppBar/> */}
            <div className='items-center justify-center flex flex-col'>
                <CheatSheet></CheatSheet>
                <ReduxToolkitDemo></ReduxToolkitDemo>
                {/* <Slider></Slider> */}
            </div>
            <Footer/>
        </div>
    )
}

export default App

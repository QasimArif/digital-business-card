import './App.css'
import Bio from './components/Bio'
import ContactInfo from './components/ContactInfo'
import MainImage from './components/MainImage'
import Socials from './components/Socials'

function App() {

  return (
    <>
      <div className='card'>
        <MainImage />
        <ContactInfo />
        <Bio />
        <Socials />
      </div>
    </>
  )
}

export default App

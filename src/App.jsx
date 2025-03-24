import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

const menuItems = [
  { id: 1, name: 'CHARACTERS', url: '#', active: false },
  { id: 2, name: 'COMICS', url: '#', active: true },
  { id: 3, name: 'MOVIES', url: '#', active: false },
  { id: 4, name: 'TV', url: '#', active: false },
  { id: 5, name: 'GAMES', url: '#', active: false },
  { id: 6, name: 'COLLECTIBLES', url: '#', active: false },
  { id: 7, name: 'VIDEOS', url: '#', active: false },
  { id: 8, name: 'FANS', url: '#', active: false },
  { id: 9, name: 'NEWS', url: '#', active: false },
  { id: 10, name: 'SHOP', url: '#', active: false }
];


function App() {

  return (
    <>
      <Header menuItems={menuItems} />
      <Main />
      <Footer />
    </>

  )
}

export default App

import { Card } from './Components/Card/card'
import { Nav } from './Components/Nav/Nav'
import { Body } from './Components/Body/Body'
import { Header } from './Components/Header/Header'
import { Footer } from './Components/Footer/Footer'
import Headerimg from './assets/headerimg.jpg'


import './App.css'

function App() {
   return (
    <>
     <Card>
      <Nav></Nav>
      <Header src={Headerimg} alt={'tabel'}/>
     <Body>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima optio omnis ullam commodi maiores quo neque ipsam, eaque quia error, porro facilis ab esse et ipsa vitae veritatis quasi iusto!</p>
     </Body>
     <Footer>
      <p>Dette er footer</p>
     </Footer>
     </Card>
    </>
  )
}

export default App

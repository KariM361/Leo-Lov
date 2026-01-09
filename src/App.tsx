import { Card } from './Components/Card/Card'
import { Nav } from './Components/Nav/Nav'
import { Body } from './Components/Body/Body'
import { Header } from './Components/Header/Header'
import { Footer } from './Components/Footer/Footer'
import {dataArray} from './Components/Data/data.ts'

import './App.css'

function App() {
 
   return (
    <>
    {dataArray.map((item) =>{
      return (
         <Card key={item.id}>
      <Nav></Nav>
      <Header src={item.src} alt={'tabel'}/>
     <Body>
      <p>{item.bodyText}</p>
      <section></section>
     </Body>
     <Footer>
      <b>{item.footerText}</b>
      <ul>
        <li>Adresse</li>
        <h4>find os her:</h4>
        <p>Maldive rd 22,</p>
        <p>seychelle Islands</p>
        <li>Kontakt</li>
        <h4>Kotakt os her:</h4>
        <p>email@mail.dk</p>
        <p>Tlf:0192 3023</p>
        <li>Politik</li>
        <h4>Vores politik:</h4>
        <p>Privatpolitik</p>
        <p>Cookiepolitik</p>
        <p>Generalle betingelser</p>
        <li>Social Medier</li>
        <h4>Facebook, Instagram</h4>
      </ul>
      <p>Dette er footer</p>
     </Footer>
     </Card>
      )
    } )} 
      
    </>
  )
}

export default App

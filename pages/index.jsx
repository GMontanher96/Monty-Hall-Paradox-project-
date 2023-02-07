import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Porta from '../components/Porta'
import { updateDoor, createDoor } from '../functions/portas'
import PortaModel from '../model/porta'
 
 
 
export default function Home() {
 
  
  const [portas, setPortas] = useState(createDoor(4,3))
  
  
  function renderizarPortas(){
    return portas.map(porta =>{
      return <Porta key={porta.numero} value={porta} onChange={novaPorta => setPortas(updateDoor(portas, novaPorta))}/>
    })
  }
 
  return (
    <div style={{display:"flex"}}>
     {renderizarPortas()}
    </div>
     )
    }
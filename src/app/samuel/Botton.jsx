"use client"

import { useState } from "react"
const Botton = () =>{
const [cambio,setcambio] = useState(0)


    return (
        <>      <button onClick={()=>{setcambio(cambio + 1)}}>Saludo</button>
        <p>{cambio}</p></>
  
        
        
        )
}

export default Botton
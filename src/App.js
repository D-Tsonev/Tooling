import React, { useState, useEffect } from 'react'
import Tools from './components/Tools'
import Ledger from './components/Ledger'
import base from './components/api'




function App() {
  
  const [ledger,setLedger] = React.useState([])
  const [tools,setTools] = React.useState([])


  React.useEffect(()=>{
    base('Ledger')
      .select({ view: 'Grid view' })
      .eachPage((records, fetchNextPage)=>{
        setLedger(records)
        console.log(records)
        console.log(records[0].fields['Asset Tag'].text)
        console.log(records[0].fields['Tool Type'])
      
        
        fetchNextPage()
      })
      
    base('Tools')
      .select({ view: 'Grid view' })
      .eachPage((records, fetchNextPage)=>{
        setTools(records)
        console.log(records)
        console.log(records[0].fields['Tool Name'])
        console.log(records[0].id)
        fetchNextPage()
      })
    
  },[])


  return (
    <>
      <h1> Lost tools  </h1> 
      { tools ?
        <Tools records={tools} /> 
        : 
        <p>Loading...</p>}
      { ledger ?
        <Ledger records={ledger} reference={tools} /> 
        : 
        <p>Loading...</p>}
    </>
  )
  
}

export default App

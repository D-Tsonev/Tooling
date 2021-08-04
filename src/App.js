import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React, { useState, useEffect } from 'react'


import Tools from './components/ProcurementTeam'
import Ledger from './components/InstallationsTem'
import Home from './components/common/Home'
import base from './lib/api'



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
    <Router>
      <Switch>
        <Route exact path='/'> 
          <Home />
        </Route>
        <Route path='/procurementteam'>
          <Ledger records={ledger} reference={tools}/>
        </Route>
        <Route path='/installationsteam'>
          <Tools records={tools}/>

        </Route>
      </Switch>
    </Router>
  )
}

export default App

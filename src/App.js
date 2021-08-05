import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import ProcurementTeam from './components/ProcurementTeam'
import InstallationsTeam from './components/InstallationsTeam'

import Home from './components/common/Home'
import base from './lib/api'


function App() {
  // * I used to useState react Hook to fetch and set data with an initial value of []
  const [ledger,setLedger] = React.useState([])
  const [tools,setTools] = React.useState([])
  // * After I have a good look at the Airtable documentation
  //* I followed the pattern using useEffect Hook * to fetch the data 
  React.useEffect(()=>{
    base('Ledger')
      .select({ view: 'Grid view' })
      .eachPage((records, fetchNextPage)=>{
        setLedger(records)

        // Tests : 
        // console.log(records)
        // console.log(records[0].fields['Asset Tag'].text)
        // console.log(records[0].fields['Tool Type'])
        
        fetchNextPage()
      })
      
    base('Tools')
      .select({ view: 'Grid view' })
      .eachPage((records, fetchNextPage)=>{
        setTools(records)
        
        // Tests : 
        // console.log(records)
        // console.log(records[0].fields['Tool Name'])
        // console.log(records[0].id)
        fetchNextPage()
      })
    
  },[])
  return (
    <Router>
      <Switch>
        <Route exact path='/'> 
          <Home />
        </Route>
        {/* Here I created two paths and passed the data to records and reference */}
        <Route path='/procurementteam'>
          <ProcurementTeam records={ledger} reference={tools}/>
        </Route>
        <Route path='/installationsteam'>
          <InstallationsTeam records={ledger} reference={tools}/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App

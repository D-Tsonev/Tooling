import React from 'react'
import { Link } from 'react-router-dom'
// import Tools from '../Tools'
// import Ledger from '../Ledger'




function Home() {
  

  return (
    
    <>
      <br/>
      <br/>
      <section className="hero">
        <div className="hero-body">
          <h1 className="title has-text-centered"> Please select team </h1>
        </div>
      </section>
      <br/><br/>
      <div>
        <Link to='/installationsteam'>
          <button className="button is-fullwidth">Instalation team</button>
        </Link>
        <br/>
        <br/>
        < Link to='/procurementteam'>
          <button className="button is-fullwidth">Procupation team</button>
        </Link>
      </div>
      {/* { tools ?
        <Tools records={tools} /> 
        : 
        <p>Loading...</p>}
      { ledger ?
        <Ledger records={ledger} reference={tools} /> 
      
        : 
        <p>Loading...</p>} */}

        
    </>
  )
  
}

export default Home

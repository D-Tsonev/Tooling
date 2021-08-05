import React from 'react'
import { Link } from 'react-router-dom'

// * Home function return two buttons link to the paths created in App.js
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
          <button className="button is-fullwidth">Procurement team</button>
        </Link>
      </div>
    </>
  )
  
}

export default Home

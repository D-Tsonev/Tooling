import { useHistory } from 'react-router'

function ProcurementTeam ({ records , reference }) {
  
  //* Back button handler
  const history = useHistory()
  function handleBack(){
    history.push('')
  }

  // *  Created handleCountAvailable to count the available tool passed as a parameter 
  const  handleCountAvailable = (tool) => {
    const tools = records.filter(record => record.name === String(tool))

    let availableTools = 0
    tools.forEach(tool=> {
      if ((tool.fields['Status']) === 'Available') {
        availableTools++
      }
    })
    return availableTools
  }
  
  // *  Created handleRestock to count the that tools need to be reordered
  const handleRestock = (tool)=> {
    if ((tool === 'Hammer') && (handleCountAvailable('Hammer') <= 2 )) {
      return 'You need to restock Hammer'
    } 
    if ((tool === 'Pliers') && (handleCountAvailable('Pliers') <= 2)) {
      return 'You need to restock Pliers'
    } 
    if ((tool === 'Screwdriver') && (handleCountAvailable('Screwdriver') <= 6)) {
      return 'You need to restock Screwdriver'
    } 
    if ((tool === 'Screws (1300pc)') && (handleCountAvailable('Screws (1300pc)') <= 3)) {
      return 'You need to restock Screws (1300pc)'
    } 
    if ((tool === 'Nails  (100pc)') && (handleCountAvailable('Nails  (100pc)') <= 5)) {
      return 'You need to restock Nails  (100pc)'
    } 
  }
  // Tests:
  // console.log(handleCountAvailable('Hammer')
  // console.log(handleRestock('Hammer'))

  return (
    <div>
      <button className="button is-fullwidth" onClick={handleBack}> Back </button>
      <br/>
      <br/>
      <section className="hero is-small">
        <div className="hero-body">
          <h1 className="title has-text-centered"> Reorder Levels</h1>
        </div>
      </section>
      <br/>
      <br/>
      <div className='box is-dark'>
        <div className='box has-text-centered '>
          <h1 className="subtitle is-3"> Minimum Stock Levels </h1>
          <hr/>
          {reference.map(tool => (
            <p key={tool.id}>
              {tool.fields['Tool Name']} -   
              Minimum Stock Level - {tool.fields['Restock Count']}</p>
          ))}
        </div>
      </div>
      <div className="box is-half has-text-centered">
        <h1 className="subtitle is-3">  Available Tools And Order Recommendations</h1>
        <hr/>
        <p>Available Hammers- 
          {handleCountAvailable('Hammer')} 
          {handleRestock('Hammer')}
        </p>
        <p>Available Pliers- 
          {handleCountAvailable('Pliers')}
          {handleRestock('Pliers')}
        </p>
        <p>Available Screwdriver- 
          {handleCountAvailable('Screwdriver')} 
          {handleRestock('Screwdriver')}
        </p>
        <p>Available Screws (1300pc)-
          {handleCountAvailable('Screws (1300pc)')} 
          {handleRestock('Screws (1300pc)')}
        </p>
        <p>Available Nails  (100pc)- 
          {handleCountAvailable('Nails  (100pc)')} 
          {handleRestock('Nails  (100pc)')}
        </p>
      </div>
    </div>

  )
}
export default ProcurementTeam
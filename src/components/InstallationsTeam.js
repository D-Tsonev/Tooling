import { useHistory } from 'react-router'

function InstallationsTeam ({ records , reference }) {
  const history = useHistory()

  //* Back button handler
  function handleBack(){
    history.push('')
  }
  //*  getRef takes toolID as parameter 
  const getRef = (toolId)=>{
    let toolName = ''
    //* Looping through array of 5 tools  
    for (let i = 0; i < reference.length; i++){
      //* toolId is object so need to conver it to String 
      // console.log(typeof toolId)
      // console.log(reference[0].id)
      if (String(toolId) === reference[i].id ) {
        toolName = reference[i].fields['Tool Name']
      }
    }
    return toolName
  }

  //*  Adding new key-value  to the array of 35 records and adding the toolName 
  records.forEach(record => {
    record.name = getRef(record.fields['Tool Type'])
  })
  
  const handleCountLost = (tool) => {
    //* filter array with a tool passed as parameter and stored in const tools
    //* example :  const hammers = records.filter(record => record.name === 'Hammer')
    const tools = records.filter(record => record.name === String(tool))

    //* create a counter 
    let lostTools = 0
    //* used forEach array method to count the same tool passed as param with status 'Lost'
    tools.forEach(tool=> {
      if ((tool.fields['Status']) === 'Lost') {
        lostTools++
      }
    })
    return lostTools
  }
  //*  created handleCountAvailable to count the available tool passed as parameter 
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
  

  const handleRestock = (tool)=> {
    if ((tool === 'Hammer') && (handleCountAvailable('Hammer') >= 2 )) {
      return 'You need to restock Hammer'
    } 
    if ((tool === 'Screwdriver') && (handleCountAvailable('Screwdriver') >= 5)) {
      return 'You need to  Screwdriver'
    } 
  }

  //*  Here I filtered array of records with status "Lost" I
  //* , stored them in const lost so I can use my new Array of lost tools in the JSX
  const lost = records.filter(record => record.fields['Status'] === 'Lost') 
  // console.log(lost)
    
  // Tests: 
  // console.log(handleCountAvailable('Hammer'))
  // console.log(handleCountLost('Hammer'))
  // console.log(handleRestock('Hammer'))


  return (
    <div>
      <div>
        <button onClick={handleBack}> Back </button>
        <h1> Lost Tools Total </h1>
        <p> Hammers - {handleCountLost('Hammer')} </p>
        <p> Pliers - {handleCountLost('Pliers')} </p>
        <p> Screwdriver - {handleCountLost('Screwdriver')} </p>
        <p> Screws (1300pc) - {handleCountLost('Screws (1300pc)')} </p>
        <p> Nails (100pc) - {handleCountLost('Nails  (100pc)')} </p>

      </div>

      <div>

        <h1> Lost Tools Detail View  </h1>

        {lost.map(lost => (
          <p key={lost.id}> {lost.fields['Asset Tag'].text} - {getRef(lost.fields['Tool Type'])} -
            {lost.fields['Status']} </p>

        ))}
      </div>
    </div>

  )
}
export default InstallationsTeam
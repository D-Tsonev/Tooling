function Ledger ({ records , reference }) {
  //  getRef takes toolID as parameter 
  const getRef = (toolId)=>{
    let toolName = ''
    // Looping through array of 5 tools  
    for (let i = 0; i < reference.length; i++){
      // toolId is object so need to conver it to String 
      // console.log(typeof toolId)
      // console.log(reference[0].id)
      if (String(toolId) === reference[i].id ) {
        toolName = reference[i].fields['Tool Name']
      }
    }
    return toolName
  }

  //  Adding new key-value  to the array of 35 records and adding the toolName 
  records.forEach(record => {
    record.name = getRef(record.fields['Tool Type'])
  })
  // console.log(records)

  // const hammers = records.filter(record => record.name === 'Hammer')

  // if (hammers.length > 0){
  //   console.log(hammers[0].fields)
  // }

  // let lostHammers = 0

  // hammers.forEach(hammer=> {
  //   if ((hammer.fields['Status']) === 'Lost') {
  //     lostHammers++
  //   }
  // })
  // console.log(lostHammers)




  const handleCountLost = (tool) => {
    // filter array with a tool passed as parameter and stored in const tools
    //  example :  const hammers = records.filter(record => record.name === 'Hammer')
    const tools = records.filter(record => record.name === String(tool))

    // create a counter 
    let lostTools = 0
    // used forEach array method to count the same tool passed as param with status 'Lost'
    tools.forEach(tool=> {
      if ((tool.fields['Status']) === 'Lost') {
        lostTools++
      }
    })
    return lostTools
  }
  //  created handleCountAvailable to count the available tool passed as parameter 
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
  console.log(handleCountAvailable('Hammer'))
  console.log(handleCountLost('Hammer'))



  const handleRestock = (tool)=> {
    if ((tool === 'Hammer') && (handleCountAvailable('Hammer') >= 2 )) {
      return 'You need to restock Hammer'
    } 
    if ((tool === 'Screwdriver') && (handleCountAvailable('Screwdriver') >= 5)) {
      return 'You need to  Screwdriver'
    } 
  }
  
  console.log(handleRestock('Hammer'))

  return (
    <div>
      {records.map(record => (
        <p key={records.id}> {record.fields['Asset Tag'].text} - {getRef(record.fields['Tool Type'])} -
          {record.fields['Status']}- </p>

      ))}
    </div>
  )
}
export default Ledger
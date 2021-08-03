function Ledger ({ records , reference }) {
  const getRef = (toolId)=>{
    let toolName = ''
    for (let i = 0; i < reference.length; i++){
      if (toolId[0] === reference[i].id ) {
        toolName = reference[i].fields['Tool Name']
      }
    }
    

    return toolName
  }


  records.forEach(record => {
    // tools[getRef(record.fields['Tool Type'])].push(record)
    record.name = getRef(record.fields['Tool Type'])
  })


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
    const tools = records.filter(record => record.name === String(tool))

    if (tools.length > 0){
      console.log(tools[0].fields)
    }
    let lostTools = 0
    tools.forEach(tool=> {
      if ((tool.fields['Status']) === 'Lost') {
        lostTools++
      }
    })
    return lostTools
  }

  console.log(handleCountLost('Hammer'))
  console.log(handleCountLost('Pliers'))
  console.log(handleCountLost('Screwdriver'))
  console.log(handleCountLost('Screwdriver'))
  console.log(handleCountLost('Screws (1300pc)'))
  console.log(handleCountLost('Screws (1300pc)'))
  console.log(handleCountLost('Nails  (100pc)'))

  


  //   let lostTools = 0
  //   tools.forEach(tool=> {
  //     if ((tool.fields['Status']) === 'Lost') {
  //       lostTools++
  //     }
  //   })
  //   console.log(lostTools)
  
  // }

  // console.log(handleCount('hammer'))
  return (
    <div>
      {records.map(record => (
        <p key={records.id}> {record.fields['Asset Tag'].text} - {getRef(record.fields['Tool Type'])} -
          {record.fields['Status']}-  </p>

      ))}
    </div>
  )
}
export default Ledger
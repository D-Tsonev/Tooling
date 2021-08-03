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
  // console.log(records.fields['Status'] === 'Lost')

  const countLost = () => {
    const filteredLedger = records.filter(record=>(record.fields['Status'] === 'Lost') )
    console.log(records)
    console.log(filteredLedger)
    console.log(filteredLedger.length)
    return filteredLedger
  }

  records.forEach(record => {
    // tools[getRef(record.fields['Tool Type'])].push(record)
    record.name = getRef(record.fields['Tool Type'])
  })


  const hammers = records.filter(record => record.name === 'Hammer')
  
  if (hammers.length > 0){
    console.log(hammers[0].fields)
  }

  let lostHammers = 0

  hammers.forEach(hammer=> {
    if ((hammer.fields['Status']) === 'Lost') {
      lostHammers++
    }
  })
  console.log(lostHammers)
  const handleCount = () => {
    let count = ''
    for (let i = 0; i < reference.length; i++){
      if ((records.fields['Status']) === 'Lost'){
        count ++
      }
    }
    return count 
  }

  return (
    <div>
      {records.map(record => (
        <p key={records.id}> {record.fields['Asset Tag'].text} - {getRef(record.fields['Tool Type'])} -
          {record.fields['Status']}- {handleCount} </p>
      ))}
    </div>
  )
}
export default Ledger
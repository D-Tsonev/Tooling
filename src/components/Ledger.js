function Ledger ({ records , reference }) {
  const getRef = (toolId)=>{
    let toolName = ''
    for (let i = 0; i < reference.length; i++){
      if (String(toolId) === reference[i].id ) {
        toolName = reference[i].fields['Tool Name']
      }
    }
    

    return toolName
  }
  
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
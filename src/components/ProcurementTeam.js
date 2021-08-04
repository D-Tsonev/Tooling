
function Tools ({ records }) {
  return (
    <div>
      {records.map(record => (
        <p key={records.id}>
          {record.fields['Tool Name']} - {record.id}</p>
      ))}
    </div>
    
  )
}
export default Tools
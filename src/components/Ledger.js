function Ledger ({ records }) {
  return (
    <div>
      {records.map(record => (
        <p key={records.id}>
          {record.fields['Asset Tag'].text} - {record.fields['Status']}</p>

        
      ))}
    </div>
  )
}
export default Ledger
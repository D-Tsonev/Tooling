import InstallationsTeam from './InstallationsTeam'



function Tools ({ records }) {
  return (
    <div>
      {records.map(record => (
        <p key={records.id}>
          {record.fields['Tool Name']} -   
          Minimum Stock Level - {record.fields['Restock Count']} Available </p>
      ))}
    </div>

  )
}
export default Tools
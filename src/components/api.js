import Airtable from 'airtable'

// secured my api key in .env file 

const API_KEY = process.env.REACT_APP_API_KEY
const base = new Airtable({ apiKey: `${API_KEY}` }).base('app5MyMq1VN6a1Zvu')
export default base 
import { useState } from 'react'
import '../index.css'

function FindData() {
  const [data,Setdata]=useState<string>("")
  return (
    <div className="searchbox">
      <h1>Find Users</h1>
      <input
        placeholder='Search'
        value={data}
        name="data"
        onChange={(e)=>Setdata(e.target.value)}
      />
      <button>Search</button>
    </div>
  )
}

export default FindData
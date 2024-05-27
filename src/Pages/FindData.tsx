import { useEffect, useState } from 'react'
import '../index.css'
import axios from 'axios'

interface userd{
  id:number,
  name:string,
  contact:string,
  email:string
}

function FindData() {

  const [data,Setdata]=useState<string>("")

  const [user,setUser]=useState<userd>()

  const [userdata,setUserdata]=useState<userd[]>([])

  useEffect(()=>{
    if(data==""){}
    axios.get('http://localhost:3000/api/users')
    .then((response)=>{
      const fetchData:userd[]=response.data.users;
      setUserdata(fetchData);
    })
    .catch(err=>{
      console.log(err)
    })
  },[])

  useEffect(()=>{
    if(data!=""){
      axios.get(`http://localhost:3000/api/users/${parseInt(data)}`)
      .then((res)=>{
        const data=res.data;
        setUser(data)
      })
    }
  })
  return (
    <div className="searchbox">
      <h1>Find Users</h1>
      <input
        placeholder='Search id'
        value={data}
        name="data"
        onChange={(e)=>Setdata(e.target.value)}
        style={{marginRight:"20px",marginLeft:"40%"}}
      />

      <div className='users'>
        {data==""?
        userdata.map((e,i)=>(
          <ul key={i} className='user'>
            <li>Id :     {e.id}</li>
            <li>Name :   {e.name}</li>
            <li>Contact :{e.contact}</li>
            <li>Email :  {e.email}</li>
          </ul>
        )):
        <ul className='user'>
            <li>Id :     {user?.id}</li>
            <li>Name :   {user?.name}</li>
            <li>Contact :{user?.contact}</li>
            <li>Email :  {user?.email}</li>
          </ul>
        }
      </div>
    </div>
  )
}

export default FindData
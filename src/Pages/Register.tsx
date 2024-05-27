import { useEffect, useState } from "react"

function Register() {
  
  interface userDa{
    name:string,
    contact:number,
    email:string
  }
  

  const data={
    name:"",
    contact:"",
    email:""
  }
  const [user,setUser] = useState<userDa>(data)

  const handleData=(e)=>{
    setUser((old)=>(
      {...old,[e.target.name]:e.target.value}
    ))
  }

  useEffect(()=>{

    // axios.post('http://localhost:3000/api/users',{
    //   name:'harsh',
    //   contact:'13131331',
    //   email:"amandeep@gmil.com"
    // })
    // .then(()=>{
    //   console.log("user created")
    // }).catch((err)=>{
    //   console.log("err")
    // })

    // const response= async ()=>{
    //   const res=await fetch('http://localhost:3000/api/users')
    //   console.log(res.json()); 
    // }
    // response();

    // fetch("http://localhost:3000/api/users")
    // .then((data)=>{
    //   data.json();
    // })
    // data
  })

  return (
    <div className="register-main">
      <h1>Become Member</h1>
      <div className="register">
      <form>
      <div style={{margin:"20px 0",fontSize:"20px",fontWeight:"bold", marginInline:"30px"}}>Please Register Below</div>
        <label>Name</label>
        <input 
          placeholder="Name"
          value={user.name}
          name="name"
          onChange={handleData}
          className="input"
        />
        
        <label>Contact</label>
        <input 
          placeholder="Contact"
          value={user.contact}
          name="contact"
          onChange={handleData}
          className="input"
        />
        <label>Email</label>
        <input
          placeholder="Email"
          value={user.email}
          name="email"
          onChange={handleData}
          className="input"
        />
        <button>Register</button>
      </form>
      <img 
        src="https://img.freepik.com/premium-photo/happy-cartoon-3d-programmer-hacker_1124848-5458.jpg?w=740"
      />
      </div>
      
    </div>
  )
}

export default Register

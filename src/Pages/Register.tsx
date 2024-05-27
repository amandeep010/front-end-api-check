import { useState } from "react"

function Register() {

  const data={
    fname:"",
    lname:"",
    contact:"",
    email:""
  }
  const [user,setUser] = useState<{fname:string,lname:string,contact:number,email:string}>(data)

  const handleData=(e)=>{
    setUser((old)=>(
      {...old,[e.target.name]:e.target.value}
    ))
  }

  return (
    <div className="register">
      <h1>Become Member</h1>
      <div style={{margin:"10px 0",fontSize:"20px",fontWeight:"bold", marginInline:"30px"}}>Please Register Below</div>
      <form>
        <label>Enter Your First Name</label>
        <input 
          placeholder="First Name"
          value={user.fname}
          name="fname"
          onChange={handleData}
        />
        <label>Enter Your Last Name</label>
        <input 
          placeholder="Last Name"
          value={user.lname}
          name="lname"
          onChange={handleData}
        />
        <label>Enter Your Contact</label>
        <input 
          placeholder="Contact"
          value={user.contact}
          name="contact"
          onChange={handleData}
        />
        <label>Enter Your Email</label>
        <input
          placeholder="Email"
          value={user.email}
          name="email"
          onChange={handleData}
        />

        <button>Register</button>
      </form>
    </div>
  )
}

export default Register

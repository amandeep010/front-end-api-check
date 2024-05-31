import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

interface userDa {
  name: string,
  contact: string,
  email: string,
  password: string
}

function Register() {
  const data = {
    "name": "",
    "email": "",
    "contact": "",
    "password": ""
  }

  const [user, setUser] = useState<userDa>(data)

  const handleData = (e: { target: { name: any; value: any } }) => {
    setUser((old) => (
      { ...old, [e.target.name]: e.target.value }
    ))
  }
  const navigate = useNavigate()
  const apiCall = () => {
    if (user.name != null) {
      axios({
        method: 'post',
        url: 'http://192.168.1.63:3000/api/users',
        data: {
          name: user.name,
          email: user.email,
          contact: user.contact,
          password: user.password
        }
      })
        .then(() => {
          alert("user created!!")
          setUser(data)
          localStorage.setItem("email", user.email)
          localStorage.setItem("password", user.password)
          navigate("/login")
        })
        .catch((err: Error) => {
          alert()
          console.log(err)
        })
    }
  }

  console.log(user, "useruser")
  return (
    <div className="register-main">
      <h1>Become Member</h1>
      <div className="register">
        <form>
          <div style={{ margin: "20px 0", fontSize: "20px", fontWeight: "bold", marginInline: "30px" }}>Please Register Below</div>
          <label>Name</label>
          <input
            placeholder="Name"
            value={user.name}
            name="name"
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

          <label>Contact</label>
          <input
            placeholder="Contact"
            value={user.contact == null ? "" : user.contact}
            name="contact"
            onChange={handleData}
            className="input"
            maxLength={10}
          />
          <label>Password</label>
          <input
            placeholder="Password"
            value={user.password}
            name="password"
            onChange={handleData}
            className="input"
          />
          <button type="button" className="registerb" onClick={() => apiCall()}>Register</button>
          <p style={{
            fontSize: "10px",
            marginTop: "5px",
            marginBottom: "20px",
          }}>Already a Member ? <a href="http://localhost:5173/login">Login here!!</a></p>
        </form>
        <img
          src="https://img.freepik.com/premium-photo/happy-cartoon-3d-programmer-hacker_1124848-5458.jpg?w=740"
        />
      </div>

    </div>
  )
}

export default Register

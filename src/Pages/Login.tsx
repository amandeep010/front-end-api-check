import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

interface userDa {
  email: string,
  password: string
}

function Login() {

  const data = {
    "email": "",
    "password": ""
  }

  const [user, setUser] = useState<userDa>(data)
  const [toggle, setToggle] = useState<boolean>(false)

  const handleData = (e: { target: { name: any; value: any } }) => {
    setUser((old) => (
      { ...old, [e.target.name]: e.target.value }
    ))
  }

  const login = () => {
    axios({
      method: "post",
      url: "http://192.168.1.63:3000/api/users/login",
      data: {
        email: user.email,
        password: user.password
      }
    })
      .then((res) => {
        alert("Enjoy!! you successfully loggedin")
        setUser(data)
        localStorage.setItem('token', res.data.token);
      })
      .catch((err) => {
        console.log(err)
      })
  }
  useEffect(() => {
    if (user.email != "") {
      login()
    }
  }, [toggle])

  const navigate = useNavigate()

  const handleSubmit = () => {
    navigate("/search")
  }
  const email = localStorage.getItem("email")
  console.log(email,"email")
  return (
    <div className="register-main">
      <h1>Welcome Back  :)</h1>
      <div className="register">
        <form>
          <div style={{ margin: "20px 0", fontSize: "20px", fontWeight: "bold", marginInline: "30px" }}>Login Your Account</div>


          <label>Email</label>
          <input
            placeholder="Email"
            value={user.email}
            name="email"
            onChange={handleData}
            className="input"
          />

          <label>Password</label>
          <input
            placeholder="Password"
            value={user.password}
            name="password"
            onChange={handleData}
            className="input"
          />
          <button type="button" className="registerb" onClick={() => handleSubmit()}>Log In</button>
          <p style={{
            fontSize: "10px",
            marginTop: "5px",
          }}>New member <a href="http://localhost:5173/register">Register here!!</a></p>
        </form>
        <img
          src="https://img.freepik.com/premium-photo/happy-cartoon-3d-programmer-hacker_1124848-5458.jpg?w=740"
        />
      </div>

    </div>
  )
}

export default Login;

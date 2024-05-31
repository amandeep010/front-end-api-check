import axios from 'axios'
import { useEffect, useState } from 'react'
import { MdDelete } from "react-icons/md"
import { MdEdit } from "react-icons/md";
import PopupBox from '../Components/PopupBox';

interface userSchema{
  id:number,
  name:string,
  contact:string,
  email:string
}

function FindData() {

  //Popup box

  const [disp,setDisp] = useState("none")
  const[popId,setPopid] = useState<number>(0)

  //Show Data ---------->>>

  const[users,setUsers] = useState<userSchema[]>([])

  //Search Data --------->>>

  const [searchUser,setSearchuser] = useState<string>("")

  //pagination --------->>

  const [pageNumber, setPagenumber] = useState<number>(1)

  const itemsPerPage:number=6

  const totalPages=Math.ceil(users.length/itemsPerPage)

  const data=[1,2,3,4,5,6,7,8,9,10,11,12]
  
  // showing search data
  const [toggle,setToggle]= useState<boolean>(true)

  const [suser,setsuser]= useState<userSchema[] | null>()

  //Editing user Data

  const update = (userData:userSchema) =>{
    axios({
        method:"post",
        url:"http://192.168.1.63:3000/api/users/update",
        data:{
            id:userData.id,
            name:userData.name,
            contact:userData.contact,
            email:userData.email
        }
    })
    .then(()=>{
      alert("Data has been updated")
      setDisp("none")
      getAll()
    })
    .catch((err:Error)=>{
      console.log(err)
    })
  }

  // function getUsers () {
  //   axios.get('http://192.168.1.63:3000/api/users')
  //   .then((response)=>{
  //     setUsers(response.data)
  //   })
  //   .catch((err)=>{
  //     console.log(err)
  //   })
  // }

  // useEffect(()=>{
  //   getUsers()
  // },[])

  // useEffect(()=>{
  //   if(searchUser!=''){
  //     axios.get(`http://192.168.1.63:3000/api/users/${searchUser}`)
  //     .then((res)=>{
  //       if(res==null){
  //         console.log("no user found")
  //       }
  //       setsuser(res.data)   
  //     })
  //   }
  // },[toggle])

  // useEffect(()=>{
  //   if(searchUser==""){
  //     setsuser(null)
  //   }
  // },[searchUser])

  // const deleteData = (id: number | undefined) =>{
  //   axios.delete(`http://192.168.1.63:3000/api/users/${id}`)
  //   .then((data)=>{
  //     getUsers()
  //     alert('user deleted successfully !!!')
  //   })
  //   .catch((err)=>{
  //     alert('some error')
  //   })
  // }

  const findUsers=()=>{
    axios({
      method:"post",
      url:"http://192.168.1.63:3000/api/users/listing",
      data:{
        filter:{
          search:`${searchUser}`
        },
        sort:{
          orderBy:"name",
          order:"ASC"
        }
      }
    })
    .then((res)=>{
      setsuser(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  const getAll=()=>{
    axios({
      method: "post",
      url: "http://192.168.1.63:3000/api/users/listing",
      data:{
          filter:{
            search:""
          },
          sort:{
            orderBy:"name",
            order:"ASC"
          }
        }
    })
    .then(res=>{
      setUsers(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
  }

  function closepopup(){
        setDisp("none")
  }

  //delete user
  const remove=(id: number)=>{
    axios({
      method:"post",
      url:"http://192.168.1.63:3000/api/users/delete",
      data:{
        id:id
      }
    })
    .then(()=>{
      alert('user deleted')
      getAll();
    })
  }

  //popup box edit

  const popupdisp=(data:userSchema)=>{
    setDisp("block")
    setPopid(data.id)
  }

  const editInfo=(data: userSchema)=>{
    popupdisp(data)
  }

  useEffect(()=>{
    getAll()
  },[])

  useEffect(()=>{
    if(searchUser!="")
    findUsers()
  },[toggle])

  useEffect(()=>{
    if(searchUser=="")
      setsuser([])
  },[searchUser])

  return (
    <div style={{textAlign:"center"}}>
      <h1>Find Users</h1>
      <input
        placeholder='Search'
        value={searchUser}
        name='searchUser'
        onChange={e=>{setSearchuser(e.target.value)}}
        style={
          {
            padding:"10px",
            width:"30%",
            border:"none",
            borderRadius:"10px",
            borderBottom:"1px solid black",
            outline:"none",
            backgroundColor:"#e2e4e4",
            textAlign:"center"
          }
        }
      />
      <button
        style={
          {
            width:"7%",
            marginLeft:"15px"
          }
        }

        onClick={()=>{setToggle(!toggle)}}
      >Search</button>

      <div className='users-div'>
        {
          searchUser==""?
          users.slice(itemsPerPage*(pageNumber-1),pageNumber*itemsPerPage).map((e)=>(
            <ul key={e.id} className='users'>
              <div className='user'>
              <li><div>ID</div>: {e.id}</li>
                <li><div>Name</div>: {e.name}</li>
                <li><div>Contact</div>: {e.contact}</li>
                <li><div>Email</div>: {e.email}</li>
                <div className='editdelete'>
                <MdDelete className='remove' onClick={()=>{remove(e.id)}}/>
                <MdEdit className='edit' onClick={()=>{editInfo(e)}}/>
                </div>
                
              </div>
            </ul>
          )):
          suser==null?
          <div style={
            {
              margin:"20px",
              fontSize:"30px",
              fontWeight:"bold",
            }
          }> Loading.....</div>
          :
          suser.slice(itemsPerPage*(pageNumber-1),pageNumber*itemsPerPage).map((e)=>(
            <ul key={e.id} className='users'>
              <div className='user'>
                <li><div>Name</div>: {e.name}</li>
                <li><div>Contact</div>: {e.contact}</li>
                <li><div>Email</div>: {e.email}</li>
                <div className='editdelete'>
                <MdDelete className='remove' onClick={()=>{remove(e.id)}}/>
                <MdEdit className='edit' onClick={()=>{editInfo(e)}}/>
                </div>
              </div>
            </ul>
          ))
        }

      </div>

      <PopupBox
        disp={disp}
        closepopup={closepopup}
        update={update}
        id={popId}
      />

      <div className='key'>
        {
          data.slice(0,totalPages).map((e,i)=>(
              <div className='pageno' onClick={()=>setPagenumber(e)} key={i}>{e}</div>
          ))
        } 
      </div>
    </div>
  )
}

export default FindData
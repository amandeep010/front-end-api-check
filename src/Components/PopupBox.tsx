import { useState } from "react";

interface userSchema{
    id:number,
    name:string,
    contact:string,
    email:string
}

function PopupBox(props: { disp: string; closepopup: () => any ; update: (userData: userSchema)=> void ; id : number}) {

    const rdata={
        id:0,
        name:"",
        contact:"",
        email:""
    }

    const [uData,setUdata] = useState<userSchema>(rdata)

    uData.id=props.id;

    return (
        <div
            style={
                {
                    width: "100%",
                    height: "100vh",
                    position: "absolute",
                    top: "40px",
                    display: props.disp,
                }
            }>
            <div
                style={
                    {
                        width: "50%",
                        height: "30vh",
                        backgroundColor: "gray",
                        display: "flex",
                        position: "absolute",
                        left: "25%",
                        top: "35%",
                        padding: "10px",
                        borderRadius: "30px",
                        flexDirection: "column",
                        alignItems: "center"
                    }
                }>
                <button
                    style={
                        {
                            width: "40px",
                            borderRadius: "70%",
                            position: "absolute",
                            left: "93%",
                            bottom: "85%"
                        }
                    }
                    onClick={() => props.closepopup()}
                >X</button>
                <input
                    placeholder="Name"
                    value={uData.name}
                    name="name"
                    onChange={(e)=>setUdata((old)=>{
                        return{...old,name:e.target.value}
                    })}
                    className="popi"
                />
                <input
                    placeholder="Email"
                    value={uData.email}
                    name="email"
                    onChange={(e)=>setUdata((old)=>{
                        return{...old,email:e.target.value}
                    })}
                    className="popi"
                />
                <input
                    placeholder="Contact"
                    value={uData.contact}
                    className="popi"
                    onChange={(e)=>setUdata((old)=>{
                        return{...old,contact:e.target.value}
                    })}
                    name="contact"
                />
                <button
                    onClick={()=>{
                        props.update(uData)
                        setUdata(rdata)
                    }    
                    }
                >Edit</button>
            </div>
        </div>

    )
}

export default PopupBox
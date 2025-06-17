import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Topnav() {
    let navigate = useNavigate();
    let [userDetails,setUserDetails]=useState([]);
    let userId = localStorage.getItem("userId")
    let getParticularUserId = async()=>{
          let reqOption={
            method:"get"
          }
          try {
            let res = await fetch(`https://backend-vcdx.onrender.com/getParticularUserData/${userId}`, reqOption)
            let jsoData = await res.json();
            setUserDetails(jsoData.data)
          } catch (error) {
            console.log(error)
          }
        }
        useEffect(()=>{
          getParticularUserId();
      
        })

        let deletetheUser = async()=>{
          let reqOption = {
            method:"delete"
          }
          try {
            let res = await fetch(`https://backend-vcdx.onrender.com/deleteUser/${userId}`,reqOption)
            let resData = await res.json();
           if (resData.status==="success") {
            alert(resData.msg)
            navigate("/")
           } else {
            alert(resData.msg)

           }
          } catch (error) {
            console.log(error)
          }
        }
  return (
    <div>
         <header style={{width:"100%",height:"10vh",backgroundColor:"lightgray",display:"flex",textAlign:"center",marginTop:"10px"}}>
        <h4>Home</h4>
        <h4 onClick={()=>{
          navigate("/About")
        }}>About</h4>
        <h4 onClick={()=>{
          navigate("/Update")
        }}>Update</h4>
        <h4 onClick={deletetheUser}>Delete</h4>
        <div style={{display:"flex",marginLeft:"670px"}}>
        <img style={{width:"60px", borderRadius:"40px",height:"8vh"}} src={`https://backend-vcdx.onrender.com/${userDetails.profilePic}`}></img>
         <p>Welcome:{userDetails.name}</p>
        <h4 onClick={()=>{
          navigate("/")
        }}>Signout</h4>
        </div>
        </header>

    </div>
  )
}

export default Topnav

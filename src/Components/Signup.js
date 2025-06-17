import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signup() {
    let navigate = useNavigate();
    let nameRef=useRef();
    let emailRef=useRef();
    let passwordRef = useRef();
    let profilePicRef = useRef();
    let [profilePic,setProfilePic]=useState();
    // let sendDataToServer = async()=>{
    //     let details = {
    //         name:nameRef.current.value,
    //         email:emailRef.current.value,
    //         password:passwordRef.current.value
    //     }
    //     let dataINJSON = await JSON.stringify(details);
    //     let myheader = new Headers();
    //     myheader.append("content-type","application/json")
    //     let reqOption ={
    //         method:"post",
    //         headers:myheader,
    //         body:dataINJSON
    //     }
    //     let res = await fetch ("https://backend-vcdx.onrender.com/postInData",reqOption);
    //     let dataFromServer = await res.json();
    //     if (dataFromServer.status==="success") {
    //         alert(dataFromServer.msg)
    //         navigate("/Home")
          
    //     } else {
    //         alert(dataFromServer.msg)

    //     }
    // }
    let sendDatatoDBFormData = async()=>{
        let data = new FormData();
        data.append('name', nameRef.current.value);
        data.append('email', emailRef.current.value);
        data.append('password', passwordRef.current.value);
        
        for (let i = 0; i < profilePic.length; i++) {
            data.append('profilePic',profilePicRef.current.files[i])      
        }
        let reqOption ={
            method:"post",
            body:data
        }
        try {
            let res = await fetch("https://backend-vcdx.onrender.com/multerStorage",reqOption);
            let resData = await res.json();
            console.log(resData);
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
        <center>
            <form style={{width:"400px",border:"2px solid black",height:"50vh",backgroundColor:"lightgray",borderRadius:"30px",marginTop:"30px"}}>
                <h1>Signup</h1><br/>
                <img src={profilePic} style={{width:"60px",borderRadius:"40px"}}></img>
                <input multiple ref={profilePicRef} type='file' onChange={(e)=>{
                    let profilPicUrl = URL.createObjectURL(e.target.files[0])
                    setProfilePic(profilPicUrl)
                }}></input>
                <input style={{padding:"10px",width:"270px",borderRadius:"20px",margin:"10px"}} ref={nameRef} placeholder='Enter Your Name'></input><br/>
                <input style={{padding:"10px",width:"270px",borderRadius:"20px",margin:"10px"}} ref={emailRef} placeholder='Enter Your Email'></input><br/>
                <input style={{padding:"10px",width:"270px",borderRadius:"20px",margin:"10px"}} ref={passwordRef} placeholder='Enter Your Password'></input><br/>
                <button  style={{width:"90px",padding:"7px",borderRadius:"15px",margin:"5px"}} onClick={()=>{
                   sendDatatoDBFormData();
                    // sendDataToServer();
                }} type='button'>Signup</button>
            </form>
        </center>
    </div>
  )
}

export default Signup

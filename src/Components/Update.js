import React, { useEffect, useRef, useState } from 'react'
import Topnav from './Topnav';

function Update() {
  let nameRef = useRef();
  let emailRef = useRef();
  let passwordRef = useRef();
  let profilePicRef = useRef();
  let [profilePic,setProfilepic]=useState();
  let userId = localStorage.getItem("userId")
  let getParticularUserId = async()=>{
      let reqOption={
        method:"get"
      }
      try {
        let res = await fetch(`https://backend-vcdx.onrender.com/getParticularUserData/${userId}`, reqOption)
        let jsoData = await res.json();
        console.log(jsoData)
        nameRef.current.value = jsoData.data.name;
        emailRef.current.value = jsoData.data.email;
        passwordRef.current.value = jsoData.data.password;
        setProfilepic(`https://backend-vcdx.onrender.com/${jsoData.data.profilePic}`)
      } catch (error) {
        console.log(error)
      }
    }
    useEffect(() => {
      getParticularUserId();
    }, []);
    let sendDatatoDBFormData = async()=>{
      let data = new FormData();
      data.append('name', nameRef.current.value);
      data.append('email', emailRef.current.value);
      data.append('password', passwordRef.current.value);
      
      for (let i = 0; i < profilePic.length; i++) {
          data.append('profilePic',profilePicRef.current.files[i])
          
      }
      let reqOption ={
          method:"put",
          body:data
      }
      try {
          let res = await fetch("https://backend-vcdx.onrender.com/updateEmployee",reqOption);
          let resData = await res.json();
          console.log(resData);
          if (resData.status==="success") {
              alert(resData.msg)
          } else {
              alert(resData.msg)
          }
      } catch (error) {
          console.log(error)
      }
  }

  return (
    <div>
      <Topnav/>
      <center>
<form style={{width:"300px",backgroundColor:"lightblue",marginTop:"70px"}}>
  <input ref={nameRef} placeholder='name'></input>
  <input readOnly ref={emailRef}></input>
  <input ref={passwordRef} placeholder='password'></input>
<img style={{width:"80%"}} src={profilePic}></img>
<input  type='file' onClick={(e)=>{
  let profilePicUrl = URL.createObjectURL(e.target.files[0])
  setProfilepic(profilePicUrl);
  }} ref={profilePicRef}></input>
<button type='button' onClick={()=>{
  sendDatatoDBFormData();
}}>Update</button>
  </form>        
      </center>
    </div>
  )
}

export default Update

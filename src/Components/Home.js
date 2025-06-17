import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Topnav from './Topnav';

function Home() {
  // let navigate = useNavigate();
  //   const [serverData,setServerData]=useState([]);
  //   let [userDetails,setUserDetails]=useState([]);
  //   let userId = localStorage.getItem("userId")
    // let getData =async()=>{
    //     let reqOption ={
    //         method:"get"
    //     }
    //     try {
    //         let res =await fetch("https://backend-vcdx.onrender.com/getInData",reqOption);
    //     let jsoData = await res.json();
    //     console.log(jsoData)
    //     setServerData(jsoData.data)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    // let getParticularUserId = async()=>{
    //   let reqOption={
    //     method:"get"
    //   }
    //   try {
    //     let res = await fetch(`https://backend-vcdx.onrender.com/getParticularUserData/${userId}`, reqOption)
    //     let jsoData = await res.json();
    //     console.log(jsoData)
    //     setUserDetails(jsoData.data)
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
    // useEffect(()=>{
    //   getParticularUserId();
    // })

  return (
    <div>
   
     <Topnav/>
   {/* <center>
            <table style={{width:"400px", backgroundColor:"lightslategray"}} border="1">
                <thead >
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                    </tr>
                </thead>
               <tbody>
               {
            serverData && serverData.map((item, index) => {
              return (
                <tr key={index}>
                    <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.password}</td>
                </tr>
              );
            })
          }
               </tbody>
            </table>
        </center> */}

        {/* <header style={{width:"100%",height:"10vh",backgroundColor:"lightgray",display:"flex",textAlign:"center",marginTop:"10px"}}>
        <h4>Home</h4>
        <h4 onClick={()=>{
          navigate("/About")
        }}>About</h4>
        <h4 onClick={()=>{
          navigate("/Update")
        }}>Update</h4>
        <h4>Delete</h4>
        <div style={{display:"flex",marginLeft:"670px"}}>
        <img style={{width:"60px", borderRadius:"40px",height:"8vh"}} src={`https://backend-vcdx.onrender.com/${userDetails.profilePic}`}></img>
         <p>Welcome:{userDetails.name}</p>
        <h4 onClick={()=>{
          navigate("/")
        }}>Signout</h4>
        </div>
        </header> */}

        {/* <button onClick={()=>{
         getData();
        }}>Get Data</button><br/>
        <button onClick={()=>{
          getParticularUserId();
        }}>Get particular Data  </button><br/>  
<p>Welcome: {userDetails.name}</p> */}

<h1>Home Page</h1>
    </div>
  )
}

export default Home

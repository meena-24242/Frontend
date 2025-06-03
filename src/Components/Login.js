import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
function Login() {
   let navigate = useNavigate();
    const emailRef = useRef();
    const passwordRef = useRef();  
    let handleToLogin = async()=>{
        try {
            let reqOption={
                method:"post",
                headers:{
                    'content-type':'application/json'
                },
                body: JSON.stringify({
                    email:emailRef.current.value,
                    password:passwordRef.current.value
                })
            }
            let res = await fetch("http://localhost:9998/login",reqOption);
            let data = await res.json();
            if (data.msg ==="Login Success") {
            
                navigate("/Home")
                alert(data.msg)
                console.log(data.employee)
                localStorage.setItem("userId",data.employee._id)
            } else {
                alert(data.msg)

            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <center>
                <form style={{width:"400px",border:"2px solid black",height:"40vh",backgroundColor:"lightblue",borderRadius:"30px",marginTop:"30px"}}>
                    <h1>Login Form</h1>
                  
                    <input style={{padding:"10px",width:"270px",borderRadius:"20px",margin:"10px"}} ref={emailRef} type="email" placeholder="Email"></input><br/>
                    <input  style={{padding:"10px",width:"270px",borderRadius:"20px",margin:"10px"}} ref={passwordRef} placeholder="Password"></input><br/>
                    <button style={{width:"90px",padding:"7px",borderRadius:"15px"}} onClick={()=>{
                      
                       handleToLogin();
                    }} type="button">Login</button>
                    <button  style={{width:"90px",padding:"7px",borderRadius:"15px",margin:"5px"}} onClick={()=>{
                        navigate("/Signup")
                    }} type="button">Signup</button>
                </form>
            </center>
        </div>
    );
}

export default Login;

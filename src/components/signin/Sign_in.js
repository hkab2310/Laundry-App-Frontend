import React from 'react'
import  { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../Navbar/Navbar'
import "./signin.css"
import Footer from '../Footer/Footer'
import Footer2 from '../Footer2/Footer2'

const Sign_in = () => {
    const [user,setUser] = useState({
        data:"",password:""
    })

    useEffect(() => {
      localStorage.removeItem("token")
      localStorage.removeItem("user")
    
      
    }, [])
    
    const [text,setText] = useState("")
    const [red,setRed] = useState("login_mobile")
    let name,value
    const handleInputs = (e)=>{
        name = e.target.name
        value = e.target.value
        setUser({...user,[name]:value})
    }
    const Verify = async(e)=>{
        e.preventDefault()
        let phone,email
        const {data,password} = user
        console.log(password,data)
        if(parseInt(data)){
            phone = data
            axios.post("https://laundryapp-backend.onrender.com/login",{phone,password},{
                headers:{
                    "Content-Type":"application/json"
                }
            }).then((res)=>{
                console.log(res)
                if(res.status === 200){
                    const token = res.data.Token
                    const userData = res.data.User.name
                    console.log("respose",res.data.User.name);
                    localStorage.setItem('token',token)
                    localStorage.setItem('user',userData)
                    setRed("login_mobile");
                    setText("");
                //    history.push("/orders")
                window.location.href = "/orders";
                }
            }).catch(error=>{
                setText("Invalid user ")
                setRed("login_mobile_red")
            })
        }else{
            email = data
            axios.post("https://laundryapp-backend.onrender.com/login",{email,password},{
                headers:{
                    "Content-Type":"application/json"
                }
            }).then((res)=>{
                console.log(res)
                if(res.status === 200){
                    const token = res.data.Token
                    const userData = res.data.User.name
                    console.log("setting local storage");
                    localStorage.setItem('token',token)
                    localStorage.setItem('user',userData)
                    setRed("login_mobile")
                    setText("")
                    // history.push('/orders')
                    window.location.href = "/orders";
                }
            }).catch(error=>{
                setRed("login_mobile_red")
                setText("Invalid")
            })
        }
    }

  return (
    <div>
     <div>
        <Navbar />
     </div>
       <div className="signin__page">
            {/* <Header isLoggedin="false"></Header> */}
            <div className='login_main'>
                <div className='login_left'>
                    <div className='login_top'>
                        <h1 className='h-tag'>Laundry Service</h1>
                        <p className='p-tag'>Doorstep Wash & Dryclean Service</p>
                    </div>
                    <div className='login_bottom'>
                        <p className='p-tag'>Don't have an account?</p>
                        <Link to='/register'><button>Register</button></Link>
                    </div>
                </div>
                <div className='login_middle'></div>
                <div className='login_right'>
                    <h2>SIGN IN</h2>
                    <form className='login_form' onSubmit={Verify}>
                        <div className={red}>
                            <label>Mobile/Email</label><br></br>
                            <input type='text' name="data" value={user.data} onChange={handleInputs}></input><br></br>
                            <span>{text}</span>
                        </div>
                        <div className='login_password'>
                            <label>Password</label><br></br>
                            <input type='password' name='password' value={user.password} onChange={handleInputs}></input><br></br>
                            <span><a href='#'>Forgot Password?</a></span>
                        </div>
                        <div className='login_button'>
                            <button>Sign In</button>
                        </div>

                    </form>
                </div>
            </div>
            <Footer />
            <Footer2 />
            
        </div>

    </div>
    )
}
   
export default Sign_in





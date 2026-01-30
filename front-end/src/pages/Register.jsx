import { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form"

export default function Register(){

    const [message, setMessage] = useState("")
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)

      const handleGoogleSignIn =() =>{
        
      }
      
    
    return(
        <div className="login-flex">
            <div className="login-container">
                <div className="login">
                    <h1>Please Register</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="email-container">
                            <label className="email-lb" htmlFor="email">Email</label>
                            <input
                            {...register("email", { required: true })}
                            type="email" name="email" placeholder="Email Address" id="email" className="email"
                            />
                        </div>
                        <div className="password-container">
                            <label className="password-lb" htmlFor="password">Password</label>
                            <input
                            {...register("password", { required: true })}
                            type="password" name="password" placeholder="Password" id="password" className="password"
                                />                
                        </div>
                        {
                            message && <p className="message">Please enter valid email and password</p>
                        }
                        <div>
                            <button className="login-btn">Register</button>
                        </div>
                    </form>
                    <p className="register-tag">Haven't an account? Please <Link to="/login" className="login-link">Login</Link></p>
                    <div className="google-container">
                        <button className="google-btn" onClick={handleGoogleSignIn}>
                            <FaGoogle className="google-icon"/>
                            Sign in with Google
                        </button>
                    </div>
                    <p className="rights">© 2025, E-commercial Store. All rights reserved</p>
                </div>
            </div>
        </div>
    )
}
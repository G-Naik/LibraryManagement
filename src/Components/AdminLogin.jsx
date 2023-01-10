import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Styles/AdminLogin.css'



const AdminLogin = () =>{


    let [email,updateEmail] = useState("")  // in order to update the emial to the server we use the use state and Destructuring Function

    let [password,updatePassword] = useState("")

     let navigate = useNavigate()

    let Login = (e) => {  // e is a used as a parameter to prevent default
        e.preventDefault()

        let data = {email,password}
        if( email === "adminlogin@gmail.com" && password === "123456"){
            navigate('/admin/')

        }else{
            alert("Invalid Credentials")
        }
        


        // fetch("",{
        //     method:"POST",
        //     headers:{"content-Type":"/Login-form"},
        // })
    }

    return(
        <div className="user-admin-login">
                <img src="./Images/coverPage.png" alt="" />
            <div className="form">
                <h1>Admin Login</h1>

                <div className="form-input">

                    <form onSubmit={Login}>
                        <div className="email">
                            <p>Email</p>
                             <input type="email" placeholder="Enter Your Email" value={email} onChange={(e) => updateEmail(e.target.value)} required/>
                        </div>
                        <div className="password">
                            <p>Password</p>
                             <input type="password" placeholder="Enter your Password" value={password} onChange={(e) => updatePassword(e.target.value)} required/>
                        </div>
                        <button>Login</button>
                    </form>

                </div>

            </div>

        </div>
    );
}
export default AdminLogin
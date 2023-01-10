import { useNavigate } from "react-router-dom";
import '../Styles/AdminLogin.css'

const UserLogin = () => {

    let navigate  = useNavigate()

    let Login = () => {
        navigate('/user/')
    }

    return ( 
        <div className="user-admin-login">
            <img src="./Images/coverPage.png" alt="" />
            <div className="form">
                <h1>User Login</h1>

                <div className="form-input">

                    <form onSubmit={Login}>
                        <div className="email">
                            <p>Email</p>
                             <input type="email" placeholder="Enter Your Email" required/>
                        </div>
                        <div className="password">
                            <p>Password</p>
                             <input type="password" placeholder="Enter your Password"  required/>
                        </div>

                        <button>Login</button>
                    </form>

                </div>

            </div>

        </div>
     );
}
 
export default UserLogin;
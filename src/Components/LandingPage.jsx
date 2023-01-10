import { Link } from "react-router-dom";
import '../Styles/LandingPage.css'


const LandingPage = () => {


    return(
        <div className="coverPage">
            <img src="./Images/coverpage.png" alt="" />
        <div className="landing-page">
                <h1>Library Management System</h1>
            <div className="select-login">
                    <div className="admin-user">
                        <img src="./Images/admin-login.png" alt="" />
                        <Link to="/admin-login">Admin Login</Link>
                    </div>
                    <div className="user">
                        <img src="./Images/user.png" alt="" />
                        <Link to="/user-login" class="user-1">User Login</Link>
                    </div>
            </div>
        </div>
        </div>
    );
}
export default LandingPage
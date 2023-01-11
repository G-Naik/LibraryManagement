import { Link } from "react-router-dom";
import '../Styles/LandingPage.css'


const LandingPage = () => {


    return(
        <div className="landing-cover-page">
        < div className="landing-page">
                <h1>Library Management System</h1>
                <div className="split">

                <div className="select-login">
                    <div className="admin-user">
                        <img src="./Images/admin-logo.png" alt="" />
                        <Link to="/admin-login">Admin Login</Link>
                    </div>
                    <div className="admin-user user-color">
                        <img src="./Images/user-logo.png" alt="" />
                        <Link to="/user-login" class="user-1">User Login</Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
export default LandingPage
import '../Styles/AdminNavbar.css'

import {Link} from 'react-router-dom'

const UserNavbar = () => {
    return ( 
        <div className="user-navbar">
            <div className="admin-navbar">
            <div className="logo">
                <h1>User-Portal</h1>
            </div>
            <div className="admin-links">
                <Link to="/user/">DashBoard</Link>
                <Link to="/user/book-list">Book List</Link>
                <Link to="/">Logout</Link>
            </div>
        </div>
        </div>
     );
}
 
export default UserNavbar;
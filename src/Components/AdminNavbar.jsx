import { Link } from "react-router-dom";
import '../Styles/AdminNavbar.css'

const AdminNavbar = () => {
    return ( 
        <div className="admin-navbar">
            <div className="logo">
                <h1>Admin-Portal</h1>
            </div>
            <div className="admin-links">
                <Link to="/admin/">DashBoard</Link>
                <Link to="/admin/add-book">Add Books</Link>
                <Link to="/admin/add-user">Add Users</Link>
                <Link to="/admin/book-list">Book List</Link>
                <Link  to="/admin/user-list">User List</Link>
                <Link to="/">Logout</Link>
            </div>
        </div>
     );
}
export default AdminNavbar;
import AdminNavbar from "./AdminNavbar";
import AdminDashBoard from "./AdminDashBoard";
import { Routes,Route } from "react-router-dom";
import BookList from "./BookList";
import UserList from "./UserList";
import ReadBook from "./ReadBook";
import AddUser from "./AddUser";
import AddBooks from "./AddBooks";



const AdminHome = () => {

    // Route parameter where the id is keep on updating 
    // we use path = /book-list/:id

    return ( 
        <div className="adminHome">
            <AdminNavbar/>
            <Routes>
                <Route path="/" element={<AdminDashBoard/>}/>
                <Route path="/book-list"element={<BookList/>}/>
                <Route path="/user-list" element={<UserList/>}/>
                <Route path="/book-list/:id" element={<ReadBook/>}/> 
                <Route path="/add-user" element={<AddUser/>}/>
                <Route path="/add-book" element={<AddBooks/>}/>
            </Routes>
            
        </div>
     );
}
 
export default AdminHome;
import { useEffect, useState } from "react";

import '../Styles/UserList.css'

const UserList = () => {

    let [users,updateUsers] = useState([])


    useEffect(() => {

        let fetchingUsers = async() => {

            let usersData = await fetch("http://localhost:3009/users")
            
            let updateUserData = await usersData.json()

            updateUsers(updateUserData)
        }

        fetchingUsers()

    },[])

    // Delete a book from server

   let handleRemoveUser = (id,name) => {
        updateUsers(users.filter(x => x.id !== id))
        alert(`${name} has been removed`)
   }


    return ( 
        <div className="user-list">
            <h1>UserData</h1>
            {
               users.map((user)=> (
                    <div className="user-coverpage">
                        <div className="info">
                            <h3>Name:{user.name}</h3>
                            <p>Age:{user.age}</p>
                            <p>Email:{user.email}</p>
                            <button onClick ={ () => handleRemoveUser(user.id,user.name)}>Delete</button>
                        </div>
                    </div>
               ))
            }

        </div>
     );
}
 
export default UserList;
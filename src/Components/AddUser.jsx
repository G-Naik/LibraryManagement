import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/AddUsers.css'

const AddUser = () => {
    

    let [name,setUserName] = useState("")

    let [email,setEmail] = useState("")

    let [age,setAge] = useState("")

    let [phonenumber,setNumber] = useState("")

    let navigate = useNavigate()

    let handleSubmit = (e) => {
        e.preventDefault()

        let user = {name,email,age,phonenumber}

        fetch(` http://localhost:3009/users`,{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(user)
        })
        alert("user added successfully")
        navigate('/admin/user-list')
    }
    return ( 
        <div className="add-user">
            <div className="add-user-form">
            <h1>Add Users</h1>
            <form action="" onSubmit={handleSubmit} className="add-user-form-input">
                <p>Name</p>
                <input type="text" value={name} placeholder="Enter Your Name"  onChange={(e) => setUserName(e.target.value)}/>
                <p>Email</p>
                <input type="email"  value={email}placeholder="Enter Your Email"  onChange={(e) => setEmail(e.target.value)} />
                <p>Age</p>
                <input type="number"  value={age}placeholder="Enter Your Age"  onChange={(e) => setAge(e.target.value)}/>
                <p>Number</p>
                <input type="tel" value={phonenumber} maxLength={10} placeholder="Enter Your Number"   onChange={(e) => setNumber(e.target.value)}/>
                <button>Add User</button>
            </form>
            </div>
        </div>
     );
}
 
export default AddUser;
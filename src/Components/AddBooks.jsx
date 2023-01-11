import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/AddBook.css"

const AddBooks = () => {

   
    let [title,setTitle] = useState("")
    let [authors,setAuthor] = useState("")
    let [categories,setCategory] = useState("")
    let [pageCount,setPage] = useState("")
    let [shortDescription,setshortDes] = useState("")
    let [longDescription,setLongdes] = useState("")
    let [thumbnailUrl,setURl] = useState("")


    let navigate = useNavigate()
 
    let handleSubmit = (e) => {
        e.preventDefault() // prevent form from reloading

        // data to be posted
        let bookData = {title,authors,categories,pageCount,shortDescription,longDescription,thumbnailUrl}
        fetch(`http://localhost:3009/books`,{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(bookData)
            
        })
        alert("book added successfully")
        navigate('/admin/book-list')
    }

    return ( 
        <div className="admin-addBooks">
            <div className="addbook-form-input">
            <h1>Add a Book</h1>
                <form action="" onSubmit={handleSubmit} class="admin-forms">
                   <div className="title">
                        <p>Title</p>
                        <input type="text" value={title} required onChange={(e) => setTitle(e.target.value)} placeholder="Enter Title"/>
                   </div>
                   <div className="authors">
                    <p>Authors</p>
                    <input type="text"value={authors} required placeholder="Enter Author" onChange={(e) => setAuthor(e.target.value)}/>
                   </div>

                   <div className="categories">
                    <p>Categories</p>
                    <input type="text"value={categories} required placeholder="Enter Category" onChange={(e) => setCategory(e.target.value)}/>
                   </div>

                   <div className="pageCount">
                    <p>Page Count</p>
                    <input type="number"value={pageCount} required placeholder="Page Count" onChange={(e) => setPage(e.target.value)}/>
                   </div>

                   <div className="shortDescription">
                    <p>Short Description</p>
                    <textarea name="" value={shortDescription} id="" cols="55" rows="5" placeholder="Short Description" onChange={(e) => setshortDes(e.target.value)}></textarea>
                   </div>

                   <div className="longDescription">
                    <p>Long Description</p>
                    <textarea name="" value={longDescription} id="" cols="55" rows="5" placeholder="Long Description" onChange={(e) => setLongdes(e.target.value)}></textarea>
                   </div>

                   <div className="thumbnailUrl">
                    <p>Thumbnail URL</p> 
                    <input type="text"value={thumbnailUrl} required placeholder="Paste Url" onChange={(e) => setURl(e.target.value)}/>
                   </div>
                   <button>Add Book</button>
                </form>
            </div>
        </div>
     );
}
 
export default AddBooks;
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
    let [thunbnailUrl,setURl] = useState("")


    let navigate = useNavigate()
 
    let handleSubmit = (e) => {
        e.preventDefault() // prevent form from reloading

        // data to be posted
        let bookData = {title,authors,categories,pageCount,shortDescription,longDescription,thunbnailUrl}
        fetch(`http://localhost:3009/books`,{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(bookData)
            
        })
        alert("book added successfully")
        navigate('/admin/book-list')
    }

    return ( 
        <div className="addBooks">
            <h1>Add a Book</h1>
            <div className="form-input">
                <form action="" onSubmit={handleSubmit}>
                   <div className="title">
                        <label htmlFor="">Title</label>
                        <input type="text" value={title} required onChange={(e) => setTitle(e.target.value)} placeholder="Enter Title"/>
                   </div>
                   <div className="authors">
                    <label htmlFor="">Authors</label>
                    <input type="text"value={authors} required placeholder="Enter Author" onChange={(e) => setAuthor(e.target.value)}/>
                   </div>

                   <div className="categories">
                    <label htmlFor="">Categories</label>
                    <input type="text"value={categories} required placeholder="Enter Category" onChange={(e) => setCategory(e.target.value)}/>
                   </div>

                   <div className="pageCount">
                    <label htmlFor="">Page Count</label>
                    <input type="number"value={pageCount} required placeholder="Page Count" onChange={(e) => setPage(e.target.value)}/>
                   </div>

                   <div className="shortDescription">
                    <label htmlFor="">Short Decsription</label>
                    <textarea name="" value={shortDescription} id="" cols="60" rows="10" placeholder="Short Description" onChange={(e) => setshortDes(e.target.value)}></textarea>
                   </div>

                   <div className="longDescription">
                    <label htmlFor="">Long Description</label>
                    <textarea name="" value={longDescription} id="" cols="60" rows="10" placeholder="Long Description" onChange={(e) => setLongdes(e.target.value)}></textarea>
                   </div>

                   <div className="thumbnailUrl">
                    <label htmlFor="">Thumbnail URL</label> 
                    <input type="text"value={thunbnailUrl} required placeholder="" onChange={(e) => setURl(e.target.value)}/>
                   </div>
                   <button>add Book</button>
                </form>
            </div>
        </div>
     );
}
 
export default AddBooks;
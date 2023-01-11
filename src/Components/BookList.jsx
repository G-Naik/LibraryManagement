import { useEffect, useState } from "react";
import { useNavigate,useLocation} from "react-router-dom";
import '../Styles/BookList.css'

const BookList = () => {

        
    let [books,updateBooks] = useState([])

    useEffect(() => {

        let fetchingBooks = async() => {

            let bookData = await fetch(" http://localhost:3009/books")

            let updateBookData = await bookData.json();

            updateBooks(updateBookData)

        }
        fetchingBooks()

    },[books]) // if it is null its a kind of inital render if we use books its deleteing on updating dat

    let handleRemove = (id,title) => {
        fetch(`http://localhost:3009/books/${id}`,{
            method:'DELETE'
        });
        alert(`${title} has been Deleted`) // this method is permanently Deleting From server
    }

   let navigate = useNavigate()
   
   let location = useLocation()

   let readMore = (id) => { 
    if(location.pathname == '/admin/book-list'){
        navigate(`/admin/book-list/${id}`)
    }else{
        navigate(`/user/book-list/${id}`)
    }
   }

   

    return ( 
        <div className="booklist">
            
            <h1>Books-List</h1>
            <h2> Books:{books.length}</h2>
            {
                books.map((data) => (
                    <div className="book-coverpage">
                        <div className="book-data">
                            <img src={data.thumbnailUrl} alt="" />
                        </div>
                        <div className="book-info">
                            <h4>Title:{data.title}</h4>
                            <h6>Author:{data.authors}</h6>
                            <p>Pages:{data.pageCount}</p>
                            <button onClick={() => readMore(data.id)}>ReadMore</button>
                            {location.pathname == "/admin/book-list" && <button onClick={() => handleRemove(data.id,data.title)}>Delete</button>}
                        </div>
                    </div>
                ))   
            }
        </div>
     );
}
 
export default BookList


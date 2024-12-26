import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AllCollection.css'; 
import Navbar from './Navbar'; 
import Footer from './Footer'; 


const getAvailabilityClass = (status) => {
    if (status === "Available") return "available";
    if (status === "Reserved") return "reserved";
    if (status === "Checked out") return "checked-out";
    return "";
  };


const AllCollection = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchAllBooks = async () => {
            try {
                const res = await axios.get("http://localhost:8800/books");
                setBooks(res.data);
                console.log(res);
            } catch (err) {
                console.log(err);
            }
        };
        fetchAllBooks();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete("http://localhost:8800/books/"+id)
            window.location.reload()
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <Navbar /> 
            <main className="books-container">
                <h2 className="collect-title">Our Collection</h2>
                <div className="books-grid">
                    {books.map((book) => (
                        <div className="book-card" key={book.book_id}>
                            <h2 className="book-title" style={{ 
                                fontFamily: 'Georgia, serif', 
                                background: 'linear-gradient(to bottom, rgb(255, 215, 0),rgb(0, 0, 0))', 
                                WebkitBackgroundClip: 'text', 
                                WebkitTextFillColor: 'transparent', 
                                fontSize: '1.5em' 
                            }}>{book.title}</h2>
                            <h4 className="book-author">By: {book.author}</h4>
                            <img src={require(`./coverpages/${book.title}.jpg`)} alt={`Cover of ${book.title}`}
                            style={{ width: '100%',  height: 'auto',  objectFit: 'cover' }} />
                            <p className="book-description">{book.description}</p>
                            <span className={`book-availability ${getAvailabilityClass(book.availability_status)}`}>
                                {book.availability_status} </span>
                            <button className='delete-button' onClick={()=>handleDelete(book.book_id)}>Delete</button>
                        </div>
                    ))}
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default AllCollection

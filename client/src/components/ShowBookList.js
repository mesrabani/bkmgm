import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BookCard from './BookCard';


function ShowBookList() {
    const [books, setBooks] = useState([]);


    useEffect(() => {
        axios
          .get('https://3000-srabanipatr-srabani-82x3nb8bews.ws-us90.gitpod.io/create-book/api/books')
          .then( (res) => {
            setBooks(res.data);
          })
          .catch( (err) => {
            console.log("ShowBookList Error")
            console.log(err)
          })
    },  [])

    const bookList = 
     books.length === 0
     ? 'There is no book record'
     :books.map( (book, k) => <BookCard book={book} key={k} />)
     

    return (
        <div className='ShowBookList'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <br />
                       <h2 className='display-4-text-center'>List of All Books</h2>
                    </div>

                    <div className='col-md-11'>
                        <Link
                            to='/create-book'
                            className='btn btn-outline-warning float-right'>
                                + Add New Book
                        </Link>
                        <br />
                        <br />
                        <hr />
                    </div>
                </div>
            </div>
            <div className='list'>{bookList}
            </div>
        </div>

    )
}
export default ShowBookList
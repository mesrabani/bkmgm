import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

const BookCard = () => {
    const boo = props.BookCard



    return (
        <div className='card-container'>
            <img 
              src='https://images.unsplash.com/photo-1495446815901-a7297e633e8d'
              ait='Books'
              height={200}
              />
              <div className='desc'>
                <h2>
                    <Link to={ '/show-book/${BookCard._id}' }>
                        {BookCard.title}
                    </Link>
                </h2>
                <h3>{BookCard.author}</h3>
                <p>{BookCard.description</p>
              </div>
        </div>
    )
}

function BookCardInfo() {
    return (
<div><h1>BookCardInfo</h1></div>
    )
}
export default BookCardInfo
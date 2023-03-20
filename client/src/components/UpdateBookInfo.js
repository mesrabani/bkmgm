import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../App.css'


function UpdateBookInfo(props) {
    const [book, setBook] = useState({
        title: '',
        isbn: '',
        author: '',
        description: '',
        published_date: '',
        publisher: '', 
    })

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios
        .get('https://3000-srabanipatr-srabani-82x3nb8bews.ws-us90.gitpod.io/create-book/api/books/${id}')
        .then((res) => {
          setBook({
            title: res.data.title,
            isbn: res.data.isbn,
            author: res.data.author,
            description: res.data.description,
            piblished_date: res.data.published_data,
            publisher: res.data.publisher,
          })
        })
        .catch((err) => {
            console.log("Couldn't fetch the update the book")
            console.log(err)
        })
    }, [id])

    const onChange = (e) => {
      setBook({
        ...book, [e.target.name]: [e.target.value]
      })
    }

    const onSubmit = (e) => {
      e.preventDeafult()

      const data = {
        title: book.title,
        isbn: book.isbn,
        author: book.author,
        description: book.description,
        published_data: book.published_data,
        publisher: book.publisher,
      };

      axios
      .put("https://3000-srabanipatr-srabani-82x3nb8bews.ws-us90.gitpod.io/create-book/api/books/${id}")
      .then((res) => {
        navigate(`/show-book/${id}`)
      })
      .catch((err) => {
        console.log("Could't update the book")
      })
    }
    return (
        <div className='UpdateBookInfo'>
            <div className='container'>
                <div className='row'>
                    <div className=''
                </div>
            </div>
        </div>

    )
}
export default UpdateBookInfo
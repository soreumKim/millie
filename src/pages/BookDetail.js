import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const BookDetail = () => {
    const { id } = useParams();
    const [books, setBooks] = useState(null)
    const getBookDetail = async() => {
        let url = `http://localhost:5000/books/${id}`
        let response = await fetch(url); 
        let data = await response.json();

        setBooks(data)
    }

    useEffect(() => {
        getBookDetail()
    }, [])
  return (
    <>
    <Row className='bookDetail'>
        <Col className='bookDetailImg' lg={4}>
            <img src={books?.img} alt="." />
        </Col>

        <Col>
            <div className="detailInfo">
                <div className="subTitle">{books?.subTitle}</div>
                <div className="title">{books?.title}</div>
                <div className="author">{books?.author}</div>
                <div className="view">{books?.view}</div>
                <div className="content">{books?.content}</div>
            </div>
        </Col>
    </Row>
    </>
  )
}

export default BookDetail
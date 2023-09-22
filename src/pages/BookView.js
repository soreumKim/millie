import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import BookCard from '../component/BookCard'
import { useSearchParams } from 'react-router-dom'

const BookView = () => {
    const [bookList, setBookList] = useState([]);
    const [query, setQuery] = useSearchParams();
    const getBooks = async() => {
        let searchQuery = query.get('q')||"";

        /* let url = `http://localhost:5000/books?q=${searchQuery}` */
        let url = `https://my-json-server.typicode.com/soreumKim/millie/books?q=${searchQuery}`
        let response = await fetch(url);
        let data = await response.json();

        setBookList(data)
    }

    useEffect(() => {
        getBooks()
    }, [query])

  return (
    <Container>
        <Row>
            {
                bookList.map((item, idx) => (
                    <Col lg={3} md={6} key={idx}>
                        <BookCard item={item} />
                    </Col>
                ))
            }
        </Row>
    </Container>
  )
}

export default BookView
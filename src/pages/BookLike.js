import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import BookCard from '../component/BookCard';

const BookLike = () => {
    const bookData = [

    ];
    const likedBooks = bookData.filter((item) => item.like)

  return (
    <Container>
        <Row>
            {
                likedBooks.map((item) => (
                    <Col lg={3} md={6}>
                        <BookCard key={item.id} item={item} />
                    </Col>
                ))
            }
        </Row>
    </Container>
  )
}

export default BookLike
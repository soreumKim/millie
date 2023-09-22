import React from 'react'
import { useNavigate } from 'react-router-dom'

const BookCard = ({item}) => {
    const navigate = useNavigate()
    const showDetail = () => {
        navigate(`/book/${item.id}`)
    }
    
  return (
    <div className='bookList' onClick={showDetail}>
        <div className="bookImg"><img src={item?.img} alt="." /></div>
        <div className="bookSubTitle">{item?.subTitle}</div>
        <div className="bookTitle">{item?.title}</div>
        <div className="author">{item?.author}</div>
        <div className="view">{item?.view}</div>
    </div>
  )
}

export default BookCard
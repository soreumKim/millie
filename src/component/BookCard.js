import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const BookCard = ({item}) => {
    const navigate = useNavigate()
    const [like, setLike] = useState(false)
    const showDetail = () => {
        if (!like) {
          navigate(`/book/${item.id}`)
        }
    }

    const toggleLike = (e) => {
      e.stopPropagation();
      setLike((prevLike) => !prevLike)
    }
    
  return (
    <div className='bookList' onClick={showDetail}>
        <div className="bookImg"><img src={item?.img} alt="." /></div>
        <div className="bookSubTitle">{item?.subTitle}</div>
        <div className="bookTitle">{item?.title}</div>
        <div className="author">{item?.author}</div>
        <div className="view">{item?.view} <img src={like ? require('../img/heart_full.png') : require('../img/heart_empty.png')} alt="" onClick={toggleLike} /></div>
    </div>
  )
}

export default BookCard
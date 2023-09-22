import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const menuList = [
        "전체",
        "베스트셀러",
        "웹소설",
        "소설",
        "자기계발",
        "역사"
    ]

    const navigate = useNavigate()

    const search = (e) => {
        if (e.key === "Enter") {
            console.log("enter", e.key)
            let keyword = e.target.value
            console.log(keyword)
            navigate(`/?q=${keyword}`)
        }
    }

  return (
    <>
        <div className="logo">
            <Link to='/'><img src={require('../img/logo.png')} alt="" /></Link>
            <Link to='/like' className='likeWrap'><img src={require('../img/heart_empty.png')} alt="" /> <span>찜 목록</span></Link>
        </div>

        <div className="menuArea">
            <ul className="menuList">
                {
                    menuList.map(
                        (menu, idx) => <li key={idx}><a href="#">{menu}</a></li>
                    )
                }
            </ul>
            <div className="searchArea">
                <FontAwesomeIcon icon={faSearch} />
                <input type="text" placeholder='도서 검색' onKeyDown={(e) => search(e)} />
            </div>
        </div>
    </>
  )
}

export default Navbar
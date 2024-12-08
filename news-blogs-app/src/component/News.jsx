import React from 'react'
import Weather from './weather'
import Calander from './calander'
import './news.css'
import userimage from '../assets/images/user.jpg'
const News = () => {
  return (
   <div className="news">
    <header className='news-header'>
      <h1 className="logo">News-blogs</h1>
      <div className="search-bar">
      <form action="">
        <input type="text" placeholder='Search News....' />
        <button type="submit" > <i className='fa-solid fa-magnifying-glass'  > </i></button>
      </form>
      </div>
      
    </header>
    <div className="news-content">
      <div className="navbar">
        <div className="user">
          <img src={userimage} alt="" />
          <p>Vikas's Blog</p>
        </div>
        <nav className="catagories">
          <h1 className="nav-heading">Categories</h1>
          <div className="nav-links">
            <a href="#" className='nav-link' >Genral</a>
            <a href="#" className='nav-link' >World</a>
            <a href="#" className='nav-link' >Business</a>
            <a href="#" className='nav-link' >Technology</a>
            <a href="#" className='nav-link' >Entertainment</a>
            <a href="#" className='nav-link' >Sports</a>
            <a href="#" className='nav-link' >Science</a>
            <a href="#" className='nav-link' >Health</a>
            <a href="#" className='nav-link' >Nation</a>
            <a href="#" className='nav-link' >
              Bookmarks
              <i className="fa-regular fa-bookmark"></i>
            </a>
          </div>
        </nav>
      </div>
      <div className="news-section">
        <div className="headline">Headline</div>
        <div className="news-grid">News Grid</div>
      </div>
      <div className="my-blogs">My-blogs</div>
      <div className="weather-calender">
      <Weather/>
      <Calander/>
      </div>
    

    </div>
    <footer className="news-footer">
        Footer
      </footer>
   </div>
  )
}

export default News

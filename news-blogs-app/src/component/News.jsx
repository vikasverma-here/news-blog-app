import React from 'react'
import Weather from './weather'
import Calander from './calander'
import './news.css'
const News = () => {
  return (
   <div className="news">
    <header className='news-header'>News Header</header>
    <div className="news-content">
      <div className="navbar">
        <div className="user">User</div>
        <nav className="catagories">Categories</nav>
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

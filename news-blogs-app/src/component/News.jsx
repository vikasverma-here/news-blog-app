function hitandtry(){
  // import React, { useEffect, useState } from 'react'
// import Weather from './weather'
// import Calander from './calander'
// import './news.css'
// import userimage from '../assets/images/user.jpg'
// import noimg from '../assets/images/no-img.png'

// import axios from   'axios'
// const catagories = [
//   'general',
//   'world',
//   'business',
//   'technology',
//   'entertainment',
//   'sports',
//   'science',
//   'health',
//   'nation',
// ]
// const News = () => {
// const [headline,setHeadline]=useState(null)
// const [news, setnews] = useState([])
// const [selectedCatagories, setselectedCatagories] = useState("world")


// useEffect(() => {
//   const fetchnews =async()=>{
//     const  url = `https://gnews.io/api/v4/top-headlines?category=${selectedCatagories}&lang=en&apikey=be929c4a5dd97f0e52a4fbc856421894`
//     const response =  await axios.get(url)
//     const fetchednews  =  response.data.articles

// fetchednews.forEach((articles)=>{
//   if(!articles.image){
//     articles.image=noimg
//   }
// })

    
//     setHeadline(fetchednews[0])
//     setnews(fetchednews.slice(1,7))
//     console.log(news)
//   }
//   fetchnews()
// }, [selectedCatagories])


// const handlecatagorclick = (e,catagory)=>{
//   e.preventDefault()
//   setselectedCatagories(catagory)
// }
//   return (
//    <div className="news">
//     <header className='news-header'>
//       <h1 className="logo">News-blogs</h1>
//       <div className="search-bar">
//       <form action="">
//         <input type="text" placeholder='Search News....' />
//         <button type="submit" > <i className='fa-solid fa-magnifying-glass'  > </i></button>
//       </form>
//       </div>
      
//     </header>
//     <div className="news-content">
//       <div className="navbar">
//         <div className="user">
//           <img src={userimage} alt="" />
//           <p>Vikas's Blog</p>
//         </div>
//         <nav className="catagories">
//           <h1 className="nav-heading">Categories</h1>
//           <div className="nav-links">
//           {catagories.map((catagory)=>{
//  <a href="#" className='nav-link' key={catagory} onClick={(e)=>handlecatagorclick(e,catagory)} >{catagory.charAt(0).toUpperCase() + catagory.slice(1)}</a>
//           })}
           
//             <a href="#" className='nav-link' >World</a>
//             <a href="#" className='nav-link' >Business</a>
//             <a href="#" className='nav-link' >Technology</a>
//             <a href="#" className='nav-link' >Entertainment</a>
//             <a href="#" className='nav-link' >Sports</a>
//             <a href="#" className='nav-link' >Science</a>
//             <a href="#" className='nav-link' >Health</a>
//             <a href="#" className='nav-link' >Nation</a>
//             <a href="#" className='nav-link' >
//               Bookmarks
//               <i className="fa-regular fa-bookmark"></i>
//             </a>
//           </div>
//         </nav>
//       </div>
//       <div className="news-section">
//         {headline &&( <div className="headline">
//           <img src={headline.image || noimg} alt={headline.title} />
//           <h2 className="headline-title">
//            {headline.title}
//             <i className="fa-regular fa-bookmark bookmark"></i>
//           </h2>
//         </div>)}
       
//         <div className="news-grid">
//           {news.map((articles,index)=>(
//             <div key={index} className="news-grid-item">
//             <img src={articles.image || noimg} alt={articles.title} />
//             <h3>{articles.title}
//             <i className="fa-regular fa-bookmark bookmark"></i>
//             </h3>
//           </div>
//           ))}
          
          
//         </div>
//       </div>
//       <div className="my-blogs">My-blogs</div>
//       <div className="weather-calender">
//       <Weather/>
//       <Calander/>
//       </div>
    

//     </div>
//     <footer className="news-footer">
//         Footer
//       </footer>
//    </div>
//   )
// }

// export default News


}


// !!!!!hit and try write  code 


import React, { useEffect, useState } from 'react'
import Weather from './weather'
import Calander from './calander'
import './news.css'
import userimage from '../assets/images/user.jpg'
import noimg from '../assets/images/no-img.png'

import axios from 'axios'

const catagories = [
  'general',
  'world',
  'business',
  'technology',
  'entertainment',
  'sports',
  'science',
  'health',
  'nation',
]

const News = () => {
  const [headline, setHeadline] = useState(null)
  const [news, setNews] = useState([])
  const [selectedCatagories, setSelectedCatagories] = useState("world")
  const [searchInput, setsearchInput] = useState("")
  const [searchQuery, setsearchQuery] = useState("")
  useEffect(() => {
    const fetchNews = async () => {
      let url = `https://gnews.io/api/v4/top-headlines?category=${selectedCatagories}&lang=hi&apikey=be929c4a5dd97f0e52a4fbc856421894`
      const response = await axios.get(url)
      const fetchedNews = response.data.articles

     
if(searchQuery){
  url=`https://gnews.io/api/v4/search?q=${searchQuery}&apikey=b05e5cb4edfcd7f20adad7f7244ffe86`
}

      fetchedNews.forEach((article) => {
        if (!article.image) {
          article.image = noimg
        }
      })

      setHeadline(fetchedNews[0])
      setNews(fetchedNews.slice(1, 7))
      console.log(news)
    }
    fetchNews()
  }, [selectedCatagories,searchQuery])

  const handleCategoryClick = (e, category) => {
    e.preventDefault()
    setSelectedCatagories(category)
  }


const handlesearch =(e)=>{
  e.preventDefault()
  setsearchQuery(searchInput)
  setsearchInput("")
}

  return (
    <div className="news">
      <header className='news-header'>
        <h1 className="logo">News-blogs</h1>
        <div className="search-bar">
          <form onSubmit={handlesearch}>
            <input type="text" placeholder='Search News....' value={searchInput} onChange={(e)=>setsearchInput(e.target.value)} />
            <button type="submit">
              <i className='fa-solid fa-magnifying-glass'></i>
            </button>
          </form>
        </div>
      </header>
      <div className="news-content">
        <div className="navbar">
          <div className="user">
            <img src={userimage} alt="" />
            <p>Vikas's Blog</p>
          </div>
          <nav className="categories">
            <h1 className="nav-heading">Categories</h1>
            <div className="nav-links">
              {catagories.map((category) => (
                <a
                  href="#"
                  className='nav-link'
                  key={category}
                  onClick={(e) => handleCategoryClick(e, category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </a>
              ))}
              <a href="#" className='nav-link'>
                Bookmarks
                <i className="fa-regular fa-bookmark"></i>
              </a>
            </div>
          </nav>
        </div>
        <div className="news-section">
          {headline && (
            <div className="headline">
              <img src={headline.image || noimg} alt={headline.title} />
              <h2 className="headline-title">
                {headline.title}
                <i className="fa-regular fa-bookmark bookmark"></i>
              </h2>
            </div>
          )}

          <div className="news-grid">
            {news.map((article, index) => (
              <div key={index} className="news-grid-item">
                <img src={article.image || noimg} alt={article.title} />
                <h3>
                  {article.title}
                  <i className="fa-regular fa-bookmark bookmark"></i>
                </h3>
              </div>
            ))}
          </div>
        </div>
        <div className="my-blogs">My-blogs</div>
        <div className="weather-calendar">
          <Weather />
          <Calander />
        </div>
      </div>
      <footer className="news-footer">
        Footer
      </footer>
    </div>
  )
}

export default News







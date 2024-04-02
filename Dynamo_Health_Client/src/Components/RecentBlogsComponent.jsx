import React from 'react'
import { ImageFolder } from '../Utils/Url'
import { Link } from 'react-router-dom';

function RecentBlogsComponent({blogTitle, featureImage, blogSummary, createdAt,_id}) {
  return (    
    <div className='blog__suggest'>
      <Link to={`/blogcontent/${_id}`}>
        <img src={ImageFolder+featureImage} alt="" />  
      </Link>
      <Link to={`/blogcontent/${_id}`} className='title_link'>
        <h3>{blogTitle}</h3>
      </Link>
      <p>{blogSummary}</p>
      <p>POST ON {createdAt?.slice(0,10)}</p>
    </div>    
  )
}

export default RecentBlogsComponent
import React from 'react'
import "./Blog.css"
import datas from '../data'

const Blog = () => {
  return (
    <div className='blog-content'>
        {datas.map((data) => (
            <div className="blog-box">
                <img src={data.image} alt="#" />
                <div className="blog-text">
                    <h1>{data.header}</h1>
                    <p>{data.text}</p>
                    <a href="#">იხილეთ დეტალები</a>
                </div>

            </div>
        ))}
    </div>
  )
}

export default Blog

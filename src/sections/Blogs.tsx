import BlogCard from '@/components/BlogCard'
import React from 'react'

export default function Blogs() {
  return (
    <div
    className="projects"
    id="projects"
   
>
    <div className="projects--header">
        <h1 style={{ color: "rgb(29, 155, 240)" }}>Blog</h1>
    </div>
    <div className="blog--body">
        <div className="blog--bodyContainer">
           <BlogCard/>
        </div>
    </div>
</div>
  )
}

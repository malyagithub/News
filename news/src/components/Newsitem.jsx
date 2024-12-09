import React from 'react'
import image from '../assets/news.jpg'




const Newsitem = ({title,description,src,url}) => {
  return (
    
<div className="card bg-dark text-light mb-3 d-inline-block  my-3 mx-3 px-2 py-2" style={{
    maxWidth :"345px"
}}>
  <img src={src?src:image}
  
  style={{
    height:"200px",
    width:"320px"
  }}
  className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">  {description?description.slice(0,90):"India Launches Nationwide Initiative to Promote Renewable Energy India has announced a new initiative focusing on renewable energy to combat climate change and reduce its carbon footprint. The government plans to invest significantly in solar and wind energy projects, aiming to achieve 50% of its energy needs through renewables by 2030."


    }</p>
    <a href={url} className="btn btn-primary">Read More..</a>
  </div>
</div>


  )
}

export default Newsitem
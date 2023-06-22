import React from 'react'
import Data from "./Data.json"
import Container from 'react-bootstrap/Container';
import "./Asc.css";
const Assetcontainer = () => {
    
  return (
    Data.map(post=>{
        return(
          <Container key = {post.task_id} style ={{background:'#E9ECEF', padding:'1rem',borderRadius:'0.3rem',marginTop:'1.5rem',marginBottom:'1rem',top: '125px',
          position: 'absolute',
          left: '65px' ,zIndex:'-1'}}>
            <div> <h5>{post.task_title}</h5></div>
            <div> <p>{post.task_description}</p></div>
          </Container>
        )
      })
  )
}

export default Assetcontainer

import React,{useState} from 'react'
import Data from "./Data.json"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import { faArrowLeft,faArrowRight } from '@fortawesome/free-solid-svg-icons'
import "./Sidebar.css"
import "./button.css"
const Sidebar = () => {
  const [Open,setOpen]=useState(false)
  return (
    <Card style={{height:'88vh',borderRadius:'0px 20px 20px 0px' ,boxShadow: '0px 1px 1px 0px #00000040',top:'-67px',float:'left'} }className={Open? 'mainCardOpen':'mainCardClose'}>
      <Card.Header className= { Open ?'bg-dark text-white d-flex justify-content-between':'bg-dark headerclose'}style={{borderRadius:'0px 20px 0px 0px'}} > { Open ? 'Journey Board':''}
      <FontAwesomeIcon onClick={()=> setOpen(prevState => !prevState)} icon={Open ? faArrowLeft:faArrowRight} className='arrow'/>
      </Card.Header>
      <Card.Body className={Open?"" :"d-none"}>
        {Data.map(post=>{
          return(
          <Container className='d-flex align-content-center flex-wrap flex-column align-items-start'>
          <Card.Text className='text-lg' key = {post.task_id} style={{fontSize:'1rem',paddingBottom:'7px',fontWeight:'700'}}  >
            <li >{post.task_title}</li>
          </Card.Text>
          {post.assets && post.assets.map(at=>
            (
              <Card.Text className='text-lg' key ={at.asset_id}>
               <li> {at.asset_title}</li> 
              </Card.Text>
            ))}

            </Container>
        )

      })}

      </Card.Body>
    </Card>
    
  )
}

export default Sidebar


import React from 'react'
import "./Nav_bar.css";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import img1 from "./assets/logo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faScrewdriverWrench,faBell,faHouseChimney,faEllipsisVertical,faUser } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

const Nav_bar = () => {
  return (
    <>
    <Navbar style={{background: '#F0F0F0',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25) '}}>
     <Container>
      <Navbar.Brand href="#home">
        <img
          src={img1}
          style={{    position: 'relative',
            marginRight: 'var(--sdlms-padding-0-25)',
            width: '20vw',
            minWidth: '100px',}}
          className="d-inline-block align-top"
          alt="deepThought logo"
        />
      </Navbar.Brand>
      <Stack direction="horizontal" gap={4} className="justify-content-end">
      <div className='nav-icon' ><FontAwesomeIcon icon={faHouseChimney} /></div>
      <div className='nav-icon' ><FontAwesomeIcon icon={faScrewdriverWrench} /></div>
      <div className='nav-icon' ><FontAwesomeIcon icon={faBell} /></div>
      <div className='nav-icon' ><FontAwesomeIcon icon={faUser} /></div>
      <div className='nav-icon' ><FontAwesomeIcon icon={faEllipsisVertical} /></div>
      </Stack>
      </Container>
  </Navbar>
        <Navbar>
        <Container>
          <Navbar.Brand>
            <h4>Technical Project Management</h4></Navbar.Brand>
          <Button className="justify-content-end">Submit Task </Button>
        </Container>
      </Navbar>
      </>
  )
}

export default Nav_bar

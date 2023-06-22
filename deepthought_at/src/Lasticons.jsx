import React from 'react'
import Stack from 'react-bootstrap/Stack';
import Navbar from 'react-bootstrap/Navbar';
import img2 from "./assets/calender.svg"
import img3 from "./assets/people.svg"
import img4 from "./assets/question.svg"
import "./button.css";
const Lasticons = () => {
  return (
    <Navbar fixed="bottom" >
    <Stack gap={3} className="position-absolute bottom-0 end-0 float-end">
    <img src={img4} className='last-ic'/>
    <img src={img3}className='last-ic' />
    <img src={img2} className='last-ic'/>
    </Stack>
    </Navbar>
  )
}

export default Lasticons

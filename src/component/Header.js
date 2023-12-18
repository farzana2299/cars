import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
    <div>
<Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://i.postimg.cc/prSpQpvY/download-removebg-preview.png"
             width='165'
             height='60'
              className=" align-top"
            />{' '}
        <p style={{fontSize:'40px'}}><b> AUTO<span style={{color:'#FFAC1C'}}>CAR</span></b> </p> 
       
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
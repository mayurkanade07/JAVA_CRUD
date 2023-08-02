
import './App.css';
import { Outlet } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Conditional from './Button_Logics'
function App() {
  return (
    <div>
      {/* <nav style={{backgroundColor: "silver" ,height:35,marginTop:-15}}>
        <ul   style={{display:'flex', listStyle:'none'} }>
          <li> <Link Index to="/Home">Home</Link> </li> 
          <li> <Link to="/Contactus">Contactus</Link> </li>
          <li> <Link to="/ListEmployee">ListEmployee</Link> </li>
          <li> <Link to="/List">List</Link> </li>
        </ul>
      </nav>

      <Outlet /> */}

      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/Home">Home</Nav.Link>
              <Nav.Link href="/ListEmployee">Emplyees in DotNet.</Nav.Link>
              <Nav.Link href="/Tour">Tours In JAVA</Nav.Link>
              <Nav.Link href="/Person">Persons In NodeJS</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
      {/* <div><h1>Welcome to Create CRUD project</h1></div> */}
      <Conditional/>
    </div>

  );
}

export default App;

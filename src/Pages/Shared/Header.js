import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import LeftSideNav from './LeftSideNav';
import { FaUser } from 'react-icons/fa';
import { Image } from 'react-bootstrap';


const Header = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <Navbar collapseOnSelect className='mb-3' expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand> <Link to='/'>DRAGON NEWS</Link> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav className='d-flex  align-items-center'>
                            <Nav.Link>{user?.displayName}</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                {user.photoURL ?
                                    <Image style={{ height: '30px' }}
                                        roundedCircle
                                        src={user.photoURL}></Image> : <FaUser></FaUser>
                                }
                            </Nav.Link>
                        </Nav>
                        <div className=' d-lg-none '>
                            <LeftSideNav></LeftSideNav>
                        </div>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
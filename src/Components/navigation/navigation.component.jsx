import React from 'react';
import './navigation.styles.scss';

// npm i react-bootstrap 
import { Navbar, Nav, Container } from 'react-bootstrap';
import CartIcon from '../cart-icon/cart-icon.component';

const Navigation = () => {
    return (
        <>
        <Navbar collapseOnSelect expand='md' bg='light' variant='light'>
            <Container>
                <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav>
                        <Nav.Link href='/'>EVERYDAY VALUE</Nav.Link>
                        <Nav.Link href='/'>MAKE IT A MEAL</Nav.Link>
                        <Nav.Link href='/'>SIGNATURE BOXES</Nav.Link>
                        <Nav.Link href='/'>SHARING</Nav.Link>
                        <Nav.Link href='/'>PROMOTIONS</Nav.Link>
                        <Nav.Link href='/'>SNACKS</Nav.Link>
                        <Nav.Link href='/'>MIDNIGHT DEALS</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <CartIcon/>
            </Container>
        </Navbar>
        </>
    );
}

export default Navigation;
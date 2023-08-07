"use client";

import { Navbar, Container } from "react-bootstrap";

export default function NavBar() {
    return(
        <Navbar bg="primary" variant="dark" sticky="top" expand="sm" collapseOnSelect style={{ height: "50px" }}>
            <Container>
                <Navbar.Brand href="/">
                <img
                        src="/images/home.png"
                        alt="Logo"
                        className="d-inline-block align-top"
                        style={{ borderRadius: "60%", height: "30px"}}
                    /> Home
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const params = useLocation();
  const currentPath = params.pathname;
  // react-router route links
  const routeLinks = [
    { href: "/", title: "Home" },
    { href: "/aboutus", title: "About Us" },
  ];

  return (
    <Navbar className="navbar" expand="lg">
      <Container>
        <Navbar.Brand style={{ color: "white", fontWeight: "bold" }} href="#">
          My Todo List
        </Navbar.Brand>

        <Navbar>
          <Nav
            className="me-auto my-2 my-lg-0 d-flex gap-3"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {routeLinks.map((item, id) => (
              <Link
                key={id}
                to={item.href}
                style={{
                  color: currentPath === item.href ? "white" : "#afafaf",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: currentPath === item.href ? "bold" : "medium",
                }}
              >
                {item.title}
              </Link>
            ))}
          </Nav>
        </Navbar>
      </Container>
    </Navbar>
  );
}

export default NavBar;

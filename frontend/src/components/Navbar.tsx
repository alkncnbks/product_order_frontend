import { Link } from "react-router-dom";
import { Container, Navbar as BootstrapNavbar, Nav } from "react-bootstrap";

const Navbar = () => {
    return (
        <BootstrapNavbar bg="light" expand="lg">
            <Container>
                <BootstrapNavbar.Brand>Admin Dashboard</BootstrapNavbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/login">Logout</Nav.Link>
                </Nav>
            </Container>
        </BootstrapNavbar>
    );
};

export default Navbar;

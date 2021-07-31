import { Nav, Navbar } from "react-bootstrap";
import Toggle from "react-toggle";
import Link from "next/link";
import { useTheme } from "hooks/useTheme";

export default () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Navbar className="fj-navbar fj-nav-base" bg="transparent" expand="lg">
      <Navbar.Brand className="fj-navbar-brand">
        <Link href="/">
          <a style={{ color: theme.fontColor }}>1234 blog</a>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <label style={{ paddingTop: 7 }}>
            <Toggle className="day-night-toggle" onChange={toggleTheme} />
          </label>
          <Nav.Link className="fj-navbar-item fj-navbar-link" href="/">
            Home
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

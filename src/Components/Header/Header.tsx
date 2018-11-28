import * as React from "react";

import {
  Button,
  FormControl,
  FormGroup,
  Image,
  MenuItem,
  Nav,
  Navbar,
  NavDropdown,
  NavItem,
} from "react-bootstrap";

import logo from '../../health-care.png';

import { Link } from "react-router-dom";


class Header extends React.Component {
  public render() {
    return (
      <div>
        <Navbar collapseOnSelect={true} fluid={true}>
          <Link to="/">
            <Navbar.Header>
              <Navbar.Brand>
                <Image src={logo}/>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Link>
          <Nav activeKey={1}>
            <NavItem eventKey={1} href="#">
              Link
            </NavItem>
            <NavItem eventKey={2} href="#">
              Link
            </NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider={true} />
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
          <Navbar.Collapse>
            <Navbar.Form pullRight={true}>
              <FormGroup>
                <FormControl type="text" placeholder="Search" />
              </FormGroup>{' '}
              <Button type="submit">Login</Button>
            </Navbar.Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;

import Logo from '../Logo/Logo';
import cart from 'images/cart.svg';
import { StyledHeader, NavList, NavItem, } from './Header.styled.jsx';


const Header = () => {
  return (
    <StyledHeader>
          <nav>
            <NavList>
              <NavItem>How It Works</NavItem>
              <NavItem>Fruits</NavItem>
              <NavItem>Contacts</NavItem>
            </NavList>
          </nav>
          <Logo />
          <img src={cart} alt='Cart' />
    </StyledHeader>
  );
};

export default Header;

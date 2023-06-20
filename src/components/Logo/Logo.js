import logo from 'images/logo.svg'
import { LogoText, LogoImage, LogoContent } from './Logo.styled';
const Logo = () => {
  return (
    <LogoContent>
      <LogoImage src = {logo} alt = "Logo"/>
      <LogoText>fresh harvest box</LogoText>
    </LogoContent>
  );
};
export default Logo;

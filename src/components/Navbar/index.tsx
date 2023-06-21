import {
  Nav,
  NavItem,
  Container,
  Logo,
  NavOptions,
  Image,
  Icon,
  Spacer,
  NavItemActive,
} from "./styles";

export default function Navbar() {
  return (
    <Container>
      <Logo>
        <Image src="src/assets/logo.svg" alt="Logo" />
      </Logo>
      <Spacer />
      <Nav>
        <NavItemActive to="/">_blog</NavItemActive>
        <NavItemActive to="/about">_curriculo</NavItemActive>
        <NavItemActive to="/contact">_portfólio</NavItemActive>
        <NavItemActive to="/contact">_contato</NavItemActive>
      </Nav>
      <NavOptions>
        <Icon src="src/assets/flag_us.svg" alt="Logo" />
        <Icon src="src/assets/icons/moon.svg" alt="Logo" />
      </NavOptions>
    </Container>
  );
}

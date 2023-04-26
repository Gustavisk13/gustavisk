import { Nav, NavItem, Container, Logo, NavOptions, Image, Icon, Spacer } from "./styles"

export default function Navbar() {
    return (
        <Container>
        <Logo>
            <Image src="src/assets/logo.svg" alt="Logo" />
        </Logo>
        <Spacer />
        <Nav>
            <NavItem to="/">_blog</NavItem>
            <NavItem to="/about">_curriculo</NavItem>
            <NavItem to="/contact">_portfólio</NavItem>
            <NavItem to="/contact">_contato</NavItem>
        </Nav>
        <NavOptions>
            <Icon src="src/assets/flag_us.svg" alt="Logo" />
            <Icon src="src/assets/icons/moon.svg" alt="Logo" />
        </NavOptions>

        </Container>
    )
    }
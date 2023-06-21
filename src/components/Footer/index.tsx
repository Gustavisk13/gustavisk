import { FooterContainer, Icon, Logo, SocialMediaContainer } from "./styles";

export default function Footer() {
  return (
    <>
      <FooterContainer>
        <Logo src="src/assets/logo.svg" alt="Logo" />
        <SocialMediaContainer>
          <Icon src="src/assets/icons/instagram_logo.svg" alt="Instagram" />
          <Icon src="src/assets/icons/linkedin_logo.svg" alt="Linkedin" />
          <Icon src="src/assets/icons/twitter_logo.svg" alt="Twitter" />
        </SocialMediaContainer>
      </FooterContainer>
    </>
  );
}

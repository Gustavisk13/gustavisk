import { Button, CardInfo, Container, Image, Title } from "./styles";

export default function TechnologyCard({ icon, link, name }: Technology) {
  return (
    <Container>
      <CardInfo>
        <Image src={icon} alt={name} />
        <Title>{name}</Title>
      </CardInfo>
      <Button onClick={() => console.log(link)}>PROJETOS</Button>
    </Container>
  );
}

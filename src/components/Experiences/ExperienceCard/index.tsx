import { Experience } from "../types";
import {
  Button,
  ButtonContainer,
  Container,
  Cover,
  Description,
  Subtitle,
  TextContainer,
} from "./styles";

export default function ExperienceCard({
  cover,
  description,
  title,
  direction,
}: Experience) {
  return (
    <>
      <Container isReverse={(direction ?? 0) % 2 == 0}>
        <Cover src={cover} alt={title} isReverse={(direction ?? 0) % 2 == 0} />
        <TextContainer>
          <Subtitle>{title}</Subtitle>
          <Description>{description}</Description>
          <ButtonContainer isReverse={(direction ?? 0) % 2 == 0}>
            <Button>SOBRE</Button>
          </ButtonContainer>
        </TextContainer>
      </Container>
    </>
  );
}

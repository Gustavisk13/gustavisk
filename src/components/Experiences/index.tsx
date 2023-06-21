import ExperienceCard from "./ExperienceCard";
import { Container, Title } from "./styles";

import { Experience } from "./types";

export default function Experiences() {
  const experiences: Experience[] = [
    {
      title: "Desenvolvedor Fullstack",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum velit tenetur unde accusamus, facilis beatae quis dolore quaerat voluptas laboriosam error, nobis reprehenderit, nam est? Ipsa nemo impedit alias odio.",
      cover: "src/assets/images/cover.png",
    },
    {
      title: "Desenvolvedor Fullstack",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum velit tenetur unde accusamus, facilis beatae quis dolore quaerat voluptas laboriosam error, nobis reprehenderit, nam est? Ipsa nemo impedit alias odio.",
      cover: "src/assets/images/cover.png",
    },
    {
      title: "Desenvolvedor Fullstack",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum velit tenetur unde accusamus, facilis beatae quis dolore quaerat voluptas laboriosam error, nobis reprehenderit, nam est? Ipsa nemo impedit alias odio.",
      cover: "src/assets/images/cover.png",
    },
  ];
  return (
    <>
      <Title>Ultimos Trabalhos</Title>
      <Container>
        {experiences.map((experience, index) => (
          <>
            <ExperienceCard
              key={index}
              title={experience.title}
              cover={experience.cover}
              description={experience.description}
              direction={index}
            />
          </>
        ))}
      </Container>
      <Title>Ver tudo</Title>
    </>
  );
}

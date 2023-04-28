import TechnologyCard from "./TechnologyCard";
import { Container, Spacer, Title } from "./styles";

export default function Technologies() {
  const technologies: Technology[] = [
    {
      name: "Flutter",
      icon: "src/assets/flutter_logo.svg",
      link: "https://flutter.dev/",
    },
    {
      name: "Spring",
      icon: "src/assets/spring_logo.svg",
      link: "https://spring.io/",
    },
    {
      name: "Laravel",
      icon: "src/assets/laravel_logo.svg",
      link: "https://laravel.com/",
    },
  ];

  return (
    <>
      <Title>Tecnologias</Title>
      <Container>
        {technologies.map((technology, index) => (
          <>
            <TechnologyCard
              key={index}
              icon={technology.icon}
              link={technology.link}
              name={technology.name}
            />
            {index !== technologies.length - 1 && <Spacer />}
          </>
        ))}
      </Container>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

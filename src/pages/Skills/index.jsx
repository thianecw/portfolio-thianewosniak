import { MainContainer, Title, SkillsContainer, SkillBox, SkillTitle, SkillImg} from "./style";

const skills = [
  { name: "HTML", color: "#e34c26", icon: "html5/html5-original.svg" },
  { name: "CSS", color: "#1572B6", icon: "css3/css3-original.svg" },
  { name: "JS", color: "#f0db4f", icon: "javascript/javascript-original.svg" },
  { name: "React", color: "#61DBFB", icon: "react/react-original.svg" },
  { name: "Node.js", color: "#3c873a", icon: "nodejs/nodejs-original.svg" },
  { name: "Git", color: "#f1502f", icon: "git/git-original.svg" },
  { name: "GitHub", color: "#eeeeee", icon: "github/github-original.svg", invert: true},
  { name: "MongoDB", color: "#4DB33D", icon: "mongodb/mongodb-original.svg" },
  { name: "Postgres", color: "#336791", icon: "postgresql/postgresql-original.svg" },
  { name: "Docker", color: "#0db7ed", icon: "docker/docker-plain.svg" },
  { name: "Figma", color: "#A259FD", icon: "figma/figma-original.svg" },
];

export function Skills() {
  return (
    <MainContainer>
      <Title>Skills</Title>
      <SkillsContainer>
        {skills.map((skill) => (
          <SkillBox key={skill.name}>
            <SkillTitle color={skill.color}>{skill.name}</SkillTitle>
            <SkillImg $invert={skill.invert}>
              <img
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.icon}`}
                alt={`${skill.name} logo`}
              />
            </SkillImg>
          </SkillBox>
        ))}
      </SkillsContainer>
    </MainContainer>
  );
}
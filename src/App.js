import { Container } from "./common/Container";
import FutureSkills from "./common/FutureSkills";
import Header from "./common/Header";
import Portfolio from "./common/Portfolio";
import Skills from "./common/Skills";
import useSkills from "./getCurrentSkills";

function App() {
  const skills = useSkills();

  return (
    <Container>
      <Header
        caption="THIS IS"
        name="Arkadiusz Toruń"
        description="✅💻 I am a beginner programmer, react is a small revelation for me, I want to develop further in this direction, I am currently looking for a job."
        extraText="Hire me"
      />
      <Skills
        title="My skillset includes 🛠️"
        skills={skills.currentSkills}
      />
      <FutureSkills
        title="What I want to learn next 🚀"
        skills={skills.futureSkills}
      />
      <Portfolio 
        title="Portfolio"
        subtitle="My recent projects"
      />
    </Container>
  );
}

export default App;

import { Container } from "./common/Container";
import FutureSkillSection from "./common/FutureSkillSection";
import Header from "./common/Header";
import SkillSection from "./common/SkillSection";
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
      <SkillSection
        title="My skillset includes 🛠️"
        skills={skills.currentSkills}
      />
      <FutureSkillSection
        title="What I want to learn next 🚀"
      />
    </Container>
  );
}

export default App;

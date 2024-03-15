import { Container } from "./common/Container";
import Footer from "./common/Footer";
import FutureSkills from "./common/FutureSkills";
import Header from "./common/Header";
import Portfolio from "./common/Portfolio";
import Skills from "./common/Skills";
import ThemeSwitch from "./common/ThemeSwitch";
import useSkills from "./getCurrentSkills";

export const PersonalHomepage = () => {
  const skills = useSkills();

  return (
    <Container>
      <ThemeSwitch />
      <Header
        caption="THIS IS"
        name="Arkadiusz Toruń"
        description="✅💻 I am a beginner programmer, react is a small revelation for me, I want to develop further in this direction, I am currently looking for a job."
        extraText="Hire me"
        email="arek.torun12@gmail.com"
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
      <Footer
        title="Let's Talk!"
        email="arek.torun12@gmail.com"
        description="I’m always open to new projects whenever I have the time. If you have a website, dashboard or mobile app in mind and need some help to make your ideas come to life, feel free to contact me🤞"
      />
    </Container>
  );
}

export default PersonalHomepage;

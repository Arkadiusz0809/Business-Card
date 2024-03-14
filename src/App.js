import { Container } from "./common/Container";
import Header from "./common/Header";

function App() {
  return (
    <Container>
      <Header 
      caption ="THIS IS"
      name = "Arkadiusz Toruń"
      description = "✅💻 I am a beginner programmer, react is a small revelation for me, I want to develop further in this direction, I am currently looking for a job."
      extraText = "Hire me"
      />
    </Container>
  );
}

export default App;

import { Wrapper, Img, Content, Caption, Name, Description, Button, ButtonName, ButtonIcon } from "./styled";
import icon from "./mail-icon.svg";
import profileImage from "./Arek.png";

const Header = ({ caption, name, description, extraText, email }) => (
  <Wrapper>
    <Img src={profileImage} alt="Arkadiusz Toruń" />
    <Content>
      <Caption>{caption}</Caption>
      <Name>{name}</Name>
      <Description>{description}</Description>
      <Button href={`mailto:${email}`} title={email}>
        <ButtonIcon src={icon} />
        <ButtonName>{extraText}</ButtonName>
      </Button>
    </Content>
  </Wrapper>
);

export default Header;
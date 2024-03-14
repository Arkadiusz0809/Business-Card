import { Title, Img, Content, Caption, Name, Description, Button, ButtonName, ButtonRectangle } from "./styled";
import icon from "../../images/mail-icon.svg";
import profileImage from "../../images/Arek.png";

const Header = ({ caption, name, description, extraText}) => {

    return(
        <Title>
        <Img src={profileImage} alt="Arkadiusz Toruń" />
        <Content>
          <Caption>{caption}</Caption>
          <Name>{name}</Name>
          <Description>{description}</Description>
          <Button>
            <ButtonRectangle src={icon} />
            <ButtonName>{extraText}</ButtonName>
          </Button>
        </Content>
      </Title>
    )
};

export default Header;